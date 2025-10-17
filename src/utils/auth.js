// Authentication API
import { store } from '../store';
import { setCredentials } from '../store/authSlice';

const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5001/api'
  : 'https://divinecarebackend.vercel.app/api';

/**
 * Sign in user and store credentials in Redux
 * @param {Object} credentials - { email, password }
 * @returns {Promise<Object>} - { success, message, user, token }
 */
export const signin = async (credentials) => {
  try {
    console.log('🔐 Attempting signin...');
    
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Signin failed');
    }

    if (data.success && data.token) {
      // Store credentials in Redux
      store.dispatch(setCredentials({
        user: data.user,
        token: data.token,
      }));

      console.log('✅ Signin successful, credentials stored in Redux');
      return data;
    }

    throw new Error(data.message || 'Signin failed - no token received');
  } catch (error) {
    console.error('❌ Signin error:', error);
    throw error;
  }
};

/**
 * Sign out user and clear Redux state
 */
export const signout = () => {
  try {
    // Clear Redux state
    store.dispatch({ type: 'auth/logout' });
    console.log('✅ User signed out, Redux state cleared');
  } catch (error) {
    console.error('❌ Signout error:', error);
  }
};

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  const state = store.getState();
  return state?.auth?.isAuthenticated || false;
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
 * Get current token from Redux
 * @returns {string|null}
 */
export const getCurrentToken = () => {
  const state = store.getState();
  return state?.auth?.token || null;
};

export default {
  signin,
  signout,
  isAuthenticated,
  getCurrentUser,
  getCurrentToken,
};
