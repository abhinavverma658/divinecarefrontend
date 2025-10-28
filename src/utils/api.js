// API Configuration for DivineCare Frontend
import { store } from '../store';

// Determine API base URL from .env or fallback (Vite style)
const getApiBaseUrl = () => {
  if (import.meta.env && import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/$/, '');
  }
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:5001/api';
  }
  return 'https://divinecare-backend.onrender.com/api';
};

const API_BASE_URL = getApiBaseUrl();

// Note: bearer-token logic removed — this file now treats GET requests as public

// Simple public API request helper
export const apiRequest = async (endpoint, options = {}) => {
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
    if (error && error.body) {
      console.error('API request failed:', error.message, 'status:', error.status, 'body:', error.body);
    } else {
      console.error('API request failed:', error);
    }
    throw error;
  }
};

// Bearer token logic removed — frontend API calls do not attempt to retrieve or sync admin tokens.

// Bearer-token authenticated helper removed — all authentication is handled elsewhere (if needed).

// Helper function that tries API call and falls back gracefully
const apiCallWithFallback = async (apiCall, fallbackData) => {
  try {
    const result = await apiCall();
    
    // Log the response for debugging
    console.log('📊 API Response:', result);
    
    if (result && result.success) {
      // Mark that this is real data, not fallback
      console.log('✅ Using REAL data from API');
      return { ...result, fallback: false };
    }
    
    // If API call succeeds but returns unsuccessful data, use fallback
    console.warn('⚠️ API returned unsuccessful response, using fallback');
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
    return apiCallWithFallback(
      async () => {
        // Backend route: GET /api/home (requires auth token)
        console.log('🏠 Fetching hero data from /home');
        const response = await apiRequest('/home');
        console.log('🏠 Hero data raw response:', response);
        
        // Backend returns { success: true, home: {...} }
        if (response && response.success && response.home) {
          console.log('🏠 ✅ Hero data retrieved successfully');
          return { success: true, home: response.home };
        }
        
        throw new Error('Invalid hero data structure');
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
        console.log('📄 Fetching about data from /about...');
        const response = await apiRequest('/about');
        console.log('📄 About data raw response:', response);
        
        if (response && response.success && response.about) {
          console.log('📄 ✅ About data retrieved successfully');
          return response;
        }
        
        throw new Error('Invalid about data structure');
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
        console.log('🖼️ Fetching gallery data from /gallery...');
        const response = await apiRequest('/gallery');
        console.log('🖼️ Gallery data raw response:', response);
        
        if (response && response.success && response.gallery) {
          console.log('🖼️ ✅ Gallery data retrieved successfully');
          return { success: true, gallery: response.gallery };
        }
        
        throw new Error('Invalid gallery data structure');
      },
      {
        gallery: {
          _id: 'fallback-gallery',
          heading: 'The Frontlines of Relief',
          description: 'These titles aim to convey emotion and meaning while showcasing the importance of our work through visuals.',
          images: [
            {
              _id: 'fallback-1',
              url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              public_id: 'gallery/fallback1'
            },
            {
              _id: 'fallback-2',
              url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              public_id: 'gallery/fallback2'
            },
            {
              _id: 'fallback-3',
              url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              public_id: 'gallery/fallback3'
            }
          ],
          updatedAt: new Date().toISOString()
        }
      }
    );
  },
  
  // Get team members data with graceful fallback
  getTeamMembers: async () => {
    return apiCallWithFallback(
      async () => {
        console.log('👥 Fetching team members data from /team-members...');
        const response = await apiRequest('/team-members');
        console.log('👥 Team members data raw response:', response);
        
        if (response && response.success && response.section) {
          console.log('👥 ✅ Team members data retrieved successfully');
          return { success: true, section: response.section };
        }
        
        throw new Error('Invalid team members data structure');
      },
      {
        section: {
          _id: 'fallback-team-section',
          heading: 'Meet our Volunteer members',
          description: 'Provide tips, articles, or expert advice on maintaining a healthy work-life balance, managing, Workshops or seminars organizational.',
          members: [
            {
              _id: 'fallback-member-1',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
              fullName: 'John Doe',
              designation: 'General Manager'
            },
            {
              _id: 'fallback-member-2',
              image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
              fullName: 'Jane Smith',
              designation: 'Community Coordinator'
            }
          ],
          updatedAt: new Date().toISOString()
        }
      }
    );
  },
  
  // Get events data - no fallback
  getEventsData: async () => {
    try {
      console.log('📅 Fetching events data from /home/event...');
      const response = await apiRequest('/home/event');
      console.log('📅 Events data raw response:', response);
      
      if (response && response.success && response.event) {
        console.log('📅 ✅ Events data retrieved successfully');
        return { success: true, event: response.event };
      }
      
      throw new Error('Invalid events data structure');
    } catch (error) {
      console.error('Failed to fetch events data:', error);
      throw error; // Throw error instead of returning fallback
    }
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
      // Public GET: do not attach bearer token
      const response = await apiRequest('/blog/get-blogs');
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
      // Public GET: do not attach bearer token
      const response = await apiRequest(`/blog/get-blog/${id}`);
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
      const response = await apiRequest('/services');
      console.log('🛠️ Services fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch services:', error);
      return {
        success: true,
        services: []
      };
    }
  },
  
  // Get service by ID
  getServiceById: async (id) => {
    try {
      const response = await apiRequest(`/services/${id}`);
      console.log('🛠️ Service fetched:', response);
      return response;
    } catch (error) {
      console.error('Failed to fetch service:', error);
      return null;
    }
  }
};

// Events API endpoints
export const eventsAPI = {
  // Get all events
  getEvents: async () => {
    try {
      // Public GET: do not attach bearer token
      const response = await apiRequest('/events');
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
      // Public GET: do not attach bearer token
      const response = await apiRequest(`/events/${id}`);
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
  // Get all testimonials (public)
  getTestimonials: async () => {
    return apiCallWithFallback(
      async () => {
        console.log('💬 Fetching testimonials data from /testimonials...');
        const response = await apiRequest('/testimonials');
        console.log('💬 Testimonials data raw response:', response);
        
        if (response && response.success && response.section) {
          console.log('💬 ✅ Testimonials data retrieved successfully');
          return { success: true, section: response.section };
        }
        
        throw new Error('Invalid testimonials data structure');
      },
      {
        section: {
          _id: 'fallback-testimonials',
          sectionHeading: 'Stories from the Heart',
          sectionDescription: 'Long-term recovery requires sustainable livelihoods. We support individuals & families in rebuilding.',
          testimonials: [
            {
              _id: 'fallback-1',
              rating: 5,
              content: 'The support we received after the disaster was nothing short of life-changing. When everything we had was lost, the kindness and quick response from this organization gave us hope.',
              name: 'Johnnie Lind',
              designation: 'Volunteer',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
            },
            {
              _id: 'fallback-2',
              rating: 5,
              content: 'DivineCare provided exceptional support during a difficult time. Their dedication to helping communities rebuild is truly inspiring.',
              name: 'Sarah Johnson',
              designation: 'Community Leader',
              image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face'
            },
            {
              _id: 'fallback-3',
              rating: 4,
              content: 'The team is dedicated and caring. Their work in disaster relief has made a real difference in our community.',
              name: 'Michael Chen',
              designation: 'Local Coordinator',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
            }
          ]
        }
      }
    );
  },

  // Create a testimonial (admin)
  createTestimonial: async (formData) => {
    return apiRequest('/testimonials', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  // Update testimonial by ID (admin)
  updateTestimonialById: async (id, formData) => {
    return apiRequest(`/testimonials/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
    });
  },

  // Delete testimonial by ID (admin)
  deleteTestimonialById: async (id) => {
    return apiRequest(`/testimonials/${id}`, {
      method: 'DELETE',
    });
  }
};

// Stories API endpoints  
export const storiesAPI = {
  // Get all published stories
  getStories: async () => {
    try {
      // Public GET: do not attach bearer token
      const response = await apiRequest('/stories');
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
      // Public GET: do not attach bearer token
      const response = await apiRequest(`/stories/get-story/${id}`);
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
// Token debug helpers removed