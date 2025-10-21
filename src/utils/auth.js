// Authentication Utilities for Frontend
// Frontend uses token from admin dashboard signin
import { store } from '../store';
import { setCredentials, logout as logoutAction } from '../store/authSlice';

/**
 * Get token from admin's localStorage
 * Admin signs in on admin dashboard, token stored in localStorage
 * Frontend reads that token for API calls
 */
export const getAdminToken = () => {
  try {
    // 1. Check admin's direct token storage
    const adminToken = localStorage.getItem('token');
    if (adminToken) {
      try {
        let cleanToken = adminToken;
        if (cleanToken.startsWith('"') || cleanToken.startsWith("'")) {
          cleanToken = JSON.parse(cleanToken);
        }
        
        if (typeof cleanToken === 'string' && !cleanToken.startsWith('demo-token') && cleanToken.length > 0) {
          return cleanToken;
        }
      } catch (e) {
        console.warn('Error parsing admin token:', e);
      }
    }

    // 2. Check admin's Redux persist storage
    const persistRoot = localStorage.getItem('persist:root');
    if (persistRoot) {
      try {
        const persistData = JSON.parse(persistRoot);
        if (persistData.auth) {
          const authData = JSON.parse(persistData.auth);
          if (authData.token) {
            const cleanToken = String(authData.token).replace(/"/g, '');
            if (!cleanToken.startsWith('demo-token') && cleanToken.length > 0) {
              return cleanToken;
            }
          }
        }
      } catch (e) {
        console.warn('Error parsing persist:root:', e);
      }
    }

    return null;
  } catch (error) {
    console.error('Error getting admin token:', error);
    return null;
  }
};

/**
 * Sync admin token to frontend Redux store
 * Call this on app initialization or when needed
 */
export const syncAdminToken = async () => {
  try {
    console.log('🔍 Checking for admin token in localStorage...');
    console.log('📍 Current location:', window.location.href);
    
    // Debug: Check all localStorage keys
    const allKeys = Object.keys(localStorage);
    console.log('🔑 LocalStorage keys:', allKeys);
    
    // First, try to get token from admin's localStorage (if same domain)
    const token = getAdminToken();
    
    if (token) {
      console.log('✅ Admin token found, syncing to frontend Redux');
      console.log('🔑 Token (first 20 chars):', token.substring(0, 20) + '...');
      
      // Try to get user data from admin storage
      let user = null;
      try {
        const userStr = localStorage.getItem('user');
        if (userStr) {
          user = JSON.parse(userStr);
          console.log('👤 User found:', user?.email || user?.name || 'Unknown');
        }
      } catch (e) {
        console.warn('⚠️ Could not parse user data:', e);
      }
      
      // Store in frontend Redux
      store.dispatch(setCredentials({ user, token }));
      return true;
    }
    
    // If no admin token found, try to get a frontend-specific token from backend
    console.log('📭 No admin token found in localStorage');
    console.log('� Attempting to fetch frontend token from backend...');
    
    try {
      const response = await fetch('https://divinecare-backend.onrender.com/api/auth/me');
      const data = await response.json();
      
      if (data.success && data.token) {
        console.log('✅ Frontend token fetched from backend successfully');
        console.log('📅 Token expires in:', data.expiresIn);
        console.log('🔑 Token (first 20 chars):', data.token.substring(0, 20) + '...');
        
        // Store in localStorage for future use
        localStorage.setItem('token', JSON.stringify(data.token));
        
        // Store in Redux
        store.dispatch(setCredentials({ 
          user: { name: 'Frontend User', role: 'frontend' },
          token: data.token 
        }));
        
        console.log('✅ Frontend token stored and ready to use');
        return true;
      }
    } catch (error) {
      console.error('❌ Failed to fetch frontend token:', error);
    }
    
    console.log('💡 Frontend will work with public endpoints only');
    console.log('💡 For admin features:');
    console.log('   1. Sign in to admin dashboard');
    console.log('   2. Token will be stored in localStorage');
    console.log('   3. Or deploy admin and frontend to same domain');
    return false;
  } catch (error) {
    console.error('❌ Error syncing admin token:', error);
    return false;
  }
};

/**
 * Clear frontend token (in case needed)
 * Note: This doesn't affect admin token
 */
export const clearFrontendToken = () => {
  try {
    store.dispatch(logoutAction());
    console.log('✅ Frontend token cleared from Redux');
    return true;
  } catch (error) {
    console.error('❌ Clear token error:', error);
    return false;
  }
};

/**
 * Check if user is authenticated (has valid token from admin)
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  const state = store.getState();
  if (state?.auth?.isAuthenticated) {
    return true;
  }
  
  // Check if admin token exists
  const adminToken = getAdminToken();
  if (adminToken) {
    // Sync it to Redux
    syncAdminToken();
    return true;
  }
  
  return false;
};

/**
 * Get current user from Redux
 * @returns {Object|null}
 */
export const getCurrentUser = () => {
  const state = store.getState();
  return state?.auth?.user || null;
};

/**
 * Get current token from Redux or admin storage
 * @returns {string|null}
 */
export const getCurrentToken = () => {
  const state = store.getState();
  if (state?.auth?.token) {
    return state.auth.token;
  }
  
  // Fallback to admin token
  return getAdminToken();
};

/**
 * Decode and validate JWT token
 * @param {string} token - JWT token to decode
 * @returns {Object} - Decoded token info and validation status
 */
export const decodeToken = (token) => {
  try {
    if (!token || typeof token !== 'string') {
      return { valid: false, error: 'No token provided' };
    }
    
    const parts = token.split('.');
    if (parts.length !== 3) {
      return { valid: false, error: 'Invalid JWT format (should have 3 parts)' };
    }
    
    // Decode payload
    const payload = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const decoded = atob(payload.padEnd(payload.length + (4 - (payload.length % 4)) % 4, '='));
    const obj = JSON.parse(decoded);
    
    // Check expiration
    const now = Math.floor(Date.now() / 1000);
    const isExpired = obj.exp && obj.exp < now;
    const timeLeft = obj.exp ? obj.exp - now : null;
    
    return {
      valid: !isExpired,
      payload: obj,
      issuedAt: obj.iat ? new Date(obj.iat * 1000).toLocaleString() : 'Unknown',
      expiresAt: obj.exp ? new Date(obj.exp * 1000).toLocaleString() : 'Never',
      timeLeft: timeLeft > 0 ? `${Math.floor(timeLeft / 60)} minutes` : 'Expired',
      timeLeftSeconds: timeLeft,
      isExpired: isExpired,
      error: isExpired ? 'Token is expired' : null
    };
  } catch (error) {
    return { valid: false, error: error.message };
  }
};

/**
 * Manually set token (for testing or when admin is on different domain)
 * Usage in browser console:
 *   import { setManualToken } from './utils/auth'
 *   setManualToken('your-jwt-token-here')
 * Or directly:
 *   localStorage.setItem('token', JSON.stringify('your-jwt-token'))
 *   window.location.reload()
 */
export const setManualToken = (token) => {
  try {
    if (!token || typeof token !== 'string') {
      console.error('❌ Invalid token provided');
      return false;
    }
    
    // Clean token if it has quotes
    let cleanToken = token.trim();
    if (cleanToken.startsWith('"') && cleanToken.endsWith('"')) {
      cleanToken = cleanToken.slice(1, -1);
    }
    
    // Validate token format (should be JWT)
    if (!cleanToken.startsWith('eyJ')) {
      console.error('❌ Token does not appear to be a valid JWT (should start with "eyJ")');
      console.log('💡 Make sure you copied the full token from admin localStorage');
      return false;
    }
    
    // Decode and validate
    const decoded = decodeToken(cleanToken);
    
    if (!decoded.valid) {
      console.error('❌ Token validation failed:', decoded.error);
      console.log('\n📋 Token details:');
      if (decoded.issuedAt) console.log('   - Issued at:', decoded.issuedAt);
      if (decoded.expiresAt) console.log('   - Expires at:', decoded.expiresAt);
      if (decoded.timeLeft) console.log('   - Time left:', decoded.timeLeft);
      console.log('\n💡 This token is expired or invalid. To get a fresh token:');
      console.log('   1. Go to admin dashboard and sign in');
      console.log('   2. Open console and run: localStorage.getItem("token")');
      console.log('   3. Copy the token (remove quotes if any)');
      console.log('   4. Come back here and run: window.setAuthToken("fresh-token")');
      return false;
    }
    
    console.log('✅ Token is valid!');
    console.log('📋 Token details:');
    console.log('   - Issued at:', decoded.issuedAt);
    console.log('   - Expires at:', decoded.expiresAt);
    console.log('   - Time left:', decoded.timeLeft);
    if (decoded.payload.email) console.log('   - User:', decoded.payload.email);
    
    // Store in localStorage (same format as admin)
    localStorage.setItem('token', JSON.stringify(cleanToken));
    console.log('✅ Token stored in localStorage');
    
    // Sync to Redux
    syncAdminToken();
    console.log('✅ Token synced to Redux');
    console.log('🔄 Refresh page to use new token');
    
    return true;
  } catch (error) {
    console.error('❌ Error setting manual token:', error);
    return false;
  }
};

// Expose helpers to window for easy console access
if (typeof window !== 'undefined') {
  window.setAuthToken = setManualToken;
  
  window.checkAuthToken = () => {
    const token = getCurrentToken();
    if (token) {
      console.log('✅ Token found:', token.substring(0, 20) + '...');
      console.log('📊 Token length:', token.length);
      
      // Decode and show details
      const decoded = decodeToken(token);
      if (decoded.valid) {
        console.log('✅ Token is VALID');
        console.log('📋 Details:');
        console.log('   - Expires at:', decoded.expiresAt);
        console.log('   - Time left:', decoded.timeLeft);
        if (decoded.payload.email) console.log('   - User:', decoded.payload.email);
      } else {
        console.log('❌ Token is INVALID or EXPIRED');
        console.log('❌ Error:', decoded.error);
        console.log('📋 Details:');
        if (decoded.issuedAt) console.log('   - Issued at:', decoded.issuedAt);
        if (decoded.expiresAt) console.log('   - Expired at:', decoded.expiresAt);
        console.log('\n💡 Get a fresh token from admin dashboard:');
        console.log('   1. Sign in to admin');
        console.log('   2. Run: localStorage.getItem("token")');
        console.log('   3. Copy token and run: window.setAuthToken("token-here")');
      }
      
      return decoded;
    }
    console.log('📭 No token found');
    console.log('\n💡 To set a token:');
    console.log('   1. Sign in to admin dashboard');
    console.log('   2. Copy token from admin console: localStorage.getItem("token")');
    console.log('   3. Run: window.setAuthToken("your-token-here")');
    return null;
  };
  
  console.log('🔧 Auth helpers available:');
  console.log('   window.setAuthToken("your-token") - Set token manually');
  console.log('   window.checkAuthToken() - Check current token status');
}

export default {
  getAdminToken,
  syncAdminToken,
  setManualToken,
  clearFrontendToken,
  isAuthenticated,
  getCurrentUser,
  getCurrentToken,
};
