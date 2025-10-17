// API Configuration for DivineCare Frontend
import { store } from '../store';

// Determine API base URL based on environment
const getApiBaseUrl = () => {
  // Check if running locally
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:5001/api';
  }
  // Use production backend URL (Vercel deployment)
  return 'https://divinecarebackend.vercel.app/api';
};

const API_BASE_URL = getApiBaseUrl();

// Token validation helper
const isJwtValid = (token) => {
  try {
    if (!token || typeof token !== 'string') return false;
    const parts = token.split('.');
    if (parts.length < 2) return false;
    const payload = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const decoded = atob(payload.padEnd(payload.length + (4 - (payload.length % 4)) % 4, '='));
    const obj = JSON.parse(decoded);
    if (!obj.exp) return true; // no expiry claim -> assume valid
    const now = Math.floor(Date.now() / 1000);
    return obj.exp > now + 15; // 15s safety margin
  } catch (e) {
    return false;
  }
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      // Try to read response body to give better debug info
      let body = null;
      try {
        const text = await response.text();
        try { body = JSON.parse(text); } catch (e) { body = text; }
      } catch (e) {
        body = null;
      }

      const err = new Error(`HTTP error! status: ${response.status}`);
      err.status = response.status;
      err.body = body;
      throw err;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Surface any backend message if available
    if (error && error.body) {
      console.error('API request failed:', error.message, 'status:', error.status, 'body:', error.body);
    } else {
      console.error('API request failed:', error);
    }
    throw error;
  }
};

// Helper function to get a token for frontend requests
const getFrontendToken = () => {
  try {
    // 1. PRIORITY: Get token from Redux store (set by signin)
    const state = store.getState();
    if (state?.auth?.token) {
      const token = state.auth.token;
      if (typeof token === 'string' && !token.startsWith('demo-token') && token.length > 0) {
        console.log('🔑 Using token from Redux store');
        return token;
      }
    }

    // 2. Fallback: Check localStorage for persisted token (redux-persist)
    const persist = localStorage.getItem('persist:root');
    if (persist) {
      try {
        const persistData = JSON.parse(persist);
        if (persistData.auth) {
          const authData = JSON.parse(persistData.auth);
          if (authData.token) {
            const cleanToken = String(authData.token).replace(/"/g, '');
            if (!cleanToken.startsWith('demo-token') && cleanToken.length > 0) {
              console.log('🔑 Using token from redux-persist');
              return cleanToken;
            }
          }
        }
      } catch (e) {
        console.warn('Error parsing persist:root token, ignoring.', e);
      }
    }
    
    // 3. For frontend public access, return null to skip auth entirely
    console.log('🔑 No valid token found - will use fallback data only');
    return null;
    
  } catch (error) {
    console.warn('Error getting token:', error);
    console.log('🔑 Error fallback - returning null to use fallback data');
    return null;
  }
};

// Helper function for authenticated requests with graceful fallback
const authenticatedApiRequest = async (endpoint, options = {}) => {
  // Get token from Redux store
  const token = getFrontendToken();

  if (!token) {
    console.log('🔑 No token available for authenticated request to:', endpoint);
    const err = new Error('No authentication token available');
    err.status = 401;
    throw err;
  }

  // Defensive guard: never send demo tokens
  if (typeof token === 'string' && token.startsWith('demo-token')) {
    console.error('🔑 Demo token detected — refusing to send Authorization header for', endpoint);
    const err = new Error('Demo token detected');
    err.status = 401;
    throw err;
  }

  // Validate token before using
  if (!isJwtValid(token)) {
    console.error('🔑 Token is expired or invalid');
    const err = new Error('Token is expired or invalid');
    err.status = 401;
    throw err;
  }

  console.log('🔑 Making authenticated request to:', endpoint);
  console.log('🔑 Using token:', token ? `${token.substring(0, 10)}...` : 'NO TOKEN');

  try {
    const response = await apiRequest(endpoint, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
      },
    });

    console.log('✅ Authenticated request successful:', endpoint);
    return response;
  } catch (error) {
    console.error('❌ Authenticated request failed:', endpoint, error);

    // If it's a 401 error, provide helpful debugging info
    if (error && (error.status === 401 || (error.message && error.message.includes('401')))) {
      console.error('🚨 401 Unauthorized - Token issue detected');
      console.error('💡 Suggestion: Please sign in again to get a new token');
    }

    throw error;
  }
};

// Helper function that tries API call and falls back gracefully
const apiCallWithFallback = async (apiCall, fallbackData) => {
  try {
    const result = await apiCall();
    if (result && result.success) {
      return result;
    }
    // If API call succeeds but returns unsuccessful data, use fallback
    throw new Error('API returned unsuccessful response');
  } catch (error) {
    console.warn('⚠️ API call failed, using fallback data:', error.message);
    // Return fallback data in the exact format expected by components
    return {
      success: true,
      fallback: true,
      message: 'Using fallback data due to API unavailability',
      ...fallbackData
    };
  }
};

// API endpoints
export const homeAPI = {
  // Get home carousel/hero data with graceful fallback
  getHeroData: async () => {
    // Attempt public endpoint first (works for public content).
    // If it fails, always try the authenticated endpoint which will
    // obtain a server token if needed.
    return apiCallWithFallback(
      async () => {
        // Try public endpoint first
        try {
          const response = await apiRequest('/home/68ebd3247deb89d1105fd728');
          console.log('🏠 Hero data fetched (public):', response);
          if (response && response.success && response.data) {
            return { success: true, home: response.data };
          }
        } catch (error) {
          console.log('🏠 Public endpoint failed:', error.message || error);
        }

        // Try authenticated endpoint (this will call getOrFetchToken internally)
        try {
          const response = await authenticatedApiRequest('/home');
          console.log('🏠 Hero data fetched (auth):', response);
          return response;
        } catch (err) {
          console.log('🏠 Authenticated endpoint failed:', err.message || err);
          throw err;
        }
      },
      {
        home: {
          title: 'Disaster Relief Funding',
          subtitle: 'Recognizing Our Disaster Relief Heroes',
          description: 'In times of crisis, when disaster strikes and hope seems lost, there emerge unsung heroes who rise to the occasion.',
          buttonText: 'Join The Relief Effort',
          buttonLink: '/pages/contact',
          socialMedia: {
            facebook: 'https://facebook.com/divinecare',
            instagram: 'https://instagram.com/divinecare',
            twitter: 'https://x.com/divinecare',
          },
          heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        }
      }
    );
  },
  
  // Get about us data with graceful fallback
  getAboutData: async () => {
    return apiCallWithFallback(
      async () => {
        // Try public /about first
        try {
          const response = await apiRequest('/about');
          console.log('📄 About data fetched (public):', response);
          if (response && response.success) {
            return response;
          }
        } catch (error) {
          console.log('📄 Public about endpoint failed (401 expected until backend is redeployed):', error.message || error);
          // Don't try authenticated request, just throw to use fallback
          throw error;
        }
      },
      {
        about: {
          mainHeading: 'Committed to Relief, Our Work Dedicated to Hope',
          mainDescription: 'At the heart of our organization lies a simple yet powerful mission: to provide immediate relief & lasting hope to communities affected.',
          topRightDescription: 'At the heart of our lies a simple yet powerful mission: to provide immediate relief affected by disaster organization.',
          keyPointers: [
            {
              heading: 'Helping people rebuild and prepare',
              description: 'We help them rebuild stronger more resilient for the future. Together with supporters like.',
              icon: 'fa-hands-helping'
            },
            {
              heading: 'Putting people first in everything we do',
              description: 'Guided by compassion driven by the belief that every act of kindness makes a difference.',
              icon: 'fa-heart'
            }
          ],
          centerImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          rightImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
      }
    );
  },
  
  // Get gallery data with graceful fallback
  getGalleryData: async () => {
    return apiCallWithFallback(
      async () => {
        // Try public gallery endpoint
        try {
          const response = await apiRequest('/gallery');
          console.log('🖼️ Gallery data fetched (public):', response);
          if (response && response.success && response.galleryData) {
            return { success: true, galleryData: response.galleryData };
          }
        } catch (error) {
          console.log('🖼️ Public gallery endpoint failed (401 expected until backend is redeployed):', error.message || error);
          // Don't try authenticated request, just throw to use fallback
          throw error;
        }
      },
      {
        galleryData: {
          heading: 'The Frontlines of Relief',
          description: 'These titles aim to convey emotion and meaning while showcasing the importance of our work through visuals.',
          images: [
            {
              id: 1,
              url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              public_id: 'gallery/image1'
            },
            {
              id: 2,
              url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              public_id: 'gallery/image2'
            },
            {
              id: 3,
              url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              public_id: 'gallery/image3'
            }
          ],
          ctaButton: {
            text: 'View Full Gallery',
            link: '/gallery',
            style: 'primary'
          },
          isActive: true
        }
      }
    );
  },
  
  // Get team members data with graceful fallback
  getTeamMembers: async () => {
    return apiCallWithFallback(
      async () => {
        // Try public team-members first
        try {
          const response = await apiRequest('/team-members');
          console.log('👥 Team members data fetched (public):', response);
          if (response && response.success && response.teamMembers) {
            return { success: true, teamMembers: response.teamMembers };
          }
        } catch (error) {
          console.log('👥 Public team members endpoint failed (401 expected until backend is redeployed):', error.message || error);
          // Don't try authenticated request, just throw to use fallback
          throw error;
        }
      },
      {
        teamMembers: [
          {
            _id: 'demo1',
            picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
            name: 'John Doe',
            designation: 'General Manager'
          },
          {
            _id: 'demo2',
            picture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
            name: 'Jane Smith',
            designation: 'Community Coordinator'
          }
        ]
      }
    );
  },
  
  // Get events data with graceful fallback
  getEventsData: async () => {
    return apiCallWithFallback(
      async () => {
        // Try public events endpoint first
        try {
          const response = await apiRequest('/home/event');
          console.log('📅 Events data fetched (public):', response);
          if (response && response.success && response.data) {
            return { success: true, event: response.data };
          }
        } catch (error) {
          console.log('📅 Public events endpoint failed (401 expected until backend is redeployed):', error.message || error);
          // Don't try authenticated request, just throw to use fallback
          throw error;
        }
      },
      {
        event: {
          heading: 'Heroes in Action Disaster Relief Fundraiser',
          description: 'Join us for a special event to support disaster relief efforts and make a difference in our community.',
          backgroundImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          ctaButton: {
            text: 'Vineyard Venues',
            link: '/events'
          },
          isActive: true
        }
      }
    );
  },
  
  // Health check
  healthCheck: async () => {
    return apiRequest('/health');
  }
};

// Public API endpoints (no auth required)
export const publicAPI = {
  // Submit contact form
  submitQuery: async (formData) => {
    return apiRequest('/query/create-query', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
  
  // Submit contact form
  submitContact: async (formData) => {
    return apiRequest('/contact/create-contact-form', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
  
  // Event registration
  registerForEvent: async (formData) => {
    return apiRequest('/event-registrations/register', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }
};

// Blog API endpoints (requires token for private posts)
export const blogAPI = {
  // Get all published blogs
  getBlogs: async () => {
    try {
      const response = await authenticatedApiRequest('/blog/get-blogs');
      console.log('📝 Blogs fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      return {
        success: true,
        blogs: []
      };
    }
  },
  
  // Get blog by ID
  getBlogById: async (id) => {
    try {
      const response = await authenticatedApiRequest(`/blog/get-blog/${id}`);
      console.log('📝 Blog fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch blog:', error);
      return null;
    }
  }
};

// Services API endpoints
export const servicesAPI = {
  // Get all services
  getServices: async () => {
    try {
      const response = await authenticatedApiRequest('/services/get-services');
      console.log('🛠️ Services fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch services:', error);
      return {
        success: true,
        services: []
      };
    }
  }
};

// Events API endpoints
export const eventsAPI = {
  // Get all events
  getEvents: async () => {
    try {
      const response = await authenticatedApiRequest('/events/get-events');
      console.log('📅 Events list fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch events:', error);
      return {
        success: true,
        events: []
      };
    }
  },
  
  // Get event by ID
  getEventById: async (id) => {
    try {
      const response = await authenticatedApiRequest(`/events/get-event/${id}`);
      console.log('📅 Event fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch event:', error);
      return null;
    }
  }
};

// Testimonials API endpoints
export const testimonialsAPI = {
  // Get all testimonials
  getTestimonials: async () => {
    try {
      const response = await authenticatedApiRequest('/testimonial/get-testimonials');
      console.log('💬 Testimonials fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
      return {
        success: true,
        testimonials: []
      };
    }
  }
};

// Stories API endpoints  
export const storiesAPI = {
  // Get all published stories
  getStories: async () => {
    try {
      const response = await authenticatedApiRequest('/stories/get-stories');
      console.log('📖 Stories fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch stories:', error);
      return {
        success: true,
        stories: []
      };
    }
  },
  
  // Get story by ID
  getStoryById: async (id) => {
    try {
      const response = await authenticatedApiRequest(`/stories/get-story/${id}`);
      console.log('📖 Story fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch story:', error);
      return null;
    }
  }
};

// Connection test function
export const testConnection = async () => {
  console.log('🔄 Testing API connection...');
  console.log('API Base URL:', API_BASE_URL);
  
  try {
    // Test health check
    const health = await homeAPI.healthCheck();
    console.log('✅ Health check passed:', health);
    
    // Test authenticated endpoint
    const heroData = await homeAPI.getHeroData();
    console.log('✅ Hero data test passed:', !!heroData.success);
    
    // Test about data
    const aboutData = await homeAPI.getAboutData();
    console.log('✅ About data test passed:', !!aboutData.success);
    
    return {
      success: true,
      message: 'All API connections working correctly',
      endpoints: {
        health: !!health,
        hero: !!heroData.success,
        about: !!aboutData.success
      }
    };
  } catch (error) {
    console.error('❌ API connection test failed:', error);
    return {
      success: false,
      message: 'API connection failed',
      error: error.message
    };
  }
};

export default { 
  homeAPI, 
  publicAPI, 
  blogAPI, 
  servicesAPI, 
  eventsAPI, 
  testimonialsAPI, 
  storiesAPI, 
  testConnection 
};

// Dev helper: expose a small debug function to the window so you can call it from
// the browser console: window.debugGetFrontendToken()
// Returns an object with token (if any) and the detected source.
export const debugGetFrontendToken = () => {
  try {
    // Re-run the same token discovery logic but capture source information
    const result = {
      token: null,
      source: null,
    };

    const frontendToken = localStorage.getItem('frontend-token');
    if (frontendToken) {
      if (typeof frontendToken === 'string' && frontendToken.startsWith('demo-token')) {
        result.source = 'frontend-token (demo - ignored)';
      } else {
        result.token = frontendToken;
        result.source = 'frontend-token';
        // expose and return early
        window.debugLastTokenResult = result;
        return result;
      }
    }

    const persist = localStorage.getItem('persist:root');
    if (persist) {
      try {
        const persistData = JSON.parse(persist);
        if (persistData.auth) {
          const authData = JSON.parse(persistData.auth);
          if (authData.token) {
            const cleanToken = String(authData.token).replace(/"/g, '');
            if (cleanToken.startsWith('demo-token')) {
              result.source = 'persist:root.auth.token (demo - ignored)';
            } else {
              result.token = cleanToken;
              result.source = 'persist:root.auth.token';
              window.debugLastTokenResult = result;
              return result;
            }
          }
        }
      } catch (e) {
        // ignore parse errors
      }
    }

    const directToken = localStorage.getItem('token');
    if (directToken) {
      try {
        let cleanToken = directToken;
        if (cleanToken.startsWith('"') || cleanToken.startsWith("'")) {
          try { cleanToken = JSON.parse(cleanToken); } catch (e) { cleanToken = cleanToken.replace(/^['"]|['"]$/g, ''); }
        }
        if (cleanToken && typeof cleanToken === 'object' && cleanToken.token) {
          cleanToken = String(cleanToken.token);
        }
        cleanToken = String(cleanToken);
        if (cleanToken.startsWith('demo-token')) {
          result.source = 'token (demo - ignored)';
        } else {
          result.token = cleanToken;
          result.source = 'token';
          window.debugLastTokenResult = result;
          return result;
        }
      } catch (e) {
        // ignore
      }
    }

    // nothing found
    window.debugLastTokenResult = result;
    return result;
  } catch (e) {
    return { error: e.message };
  }
};

// Attach to window in dev so it's easy to call from console
try { if (typeof window !== 'undefined') window.debugGetFrontendToken = debugGetFrontendToken; } catch (e) {}

// Dev helper: decode a JWT (returns payload or error). Use in console:
// window.debugDecodeJWT(<token>)
export const debugDecodeJWT = (token) => {
  try {
    if (!token) return { error: 'no token provided' };
    const parts = token.split('.');
    if (parts.length < 2) return { error: 'invalid token format' };
    const payload = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const decoded = atob(payload.padEnd(payload.length + (4 - (payload.length % 4)) % 4, '='));
    return JSON.parse(decoded);
  } catch (e) {
    return { error: e.message };
  }
};

try { if (typeof window !== 'undefined') window.debugDecodeJWT = debugDecodeJWT; } catch (e) {}