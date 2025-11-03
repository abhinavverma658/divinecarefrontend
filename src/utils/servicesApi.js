// Services API endpoints for Service page
import { apiRequest } from './api';

export const servicesAPI = {
  // Get all services
  getServices: async () => {
    try {
      console.log('🛠️ Fetching services data from /services...');
      const response = await apiRequest('/services');
      console.log('🛠️ Services data response:', response);
      
      if (response && Array.isArray(response)) {
        console.log('🛠️ ✅ Services data retrieved successfully');
        return {
          success: true,
          services: response
        };
      }
      
      throw new Error('Invalid services data structure');
    } catch (error) {
      console.error('Failed to fetch services data:', error);
      // Return fallback data
      return {
        success: false,
        services: [
          {
            "_id": "68f8a3641fa08193f866794e",
            "title": "Physiotherapy",
            "shortDescription": "Expert physiotherapy services",
            "detailedDescription": "We provide comprehensive physiotherapy treatments for all age groups.",
            "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/sample.jpg"
          },
          {
            "_id": "68f8a3dfa8adef0d0f2027af",
            "title": "Mental Health Support",
            "shortDescription": "Professional mental health counseling",
            "detailedDescription": "Comprehensive mental health support services for individuals and families.",
            "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/mental-health.jpg"
          },
          {
            "_id": "68f8a3dfa8adef0d0f2027b0",
            "title": "Community Outreach",
            "shortDescription": "Building stronger communities together",
            "detailedDescription": "Programs designed to strengthen community bonds and provide support where needed most.",
            "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/community.jpg"
          }
        ]
      };
    }
  },

  // Get single service by ID
  getSingleService: async (serviceId) => {
    try {
      console.log(`🛠️ Fetching single service data from /services/${serviceId}...`);
      const response = await apiRequest(`/services/${serviceId}`);
      console.log('🛠️ Single service data response:', response);
      
      if (response && response._id) {
        console.log('🛠️ ✅ Single service data retrieved successfully');
        return {
          success: true,
          service: response
        };
      }
      
      throw new Error('Invalid single service data structure');
    } catch (error) {
      console.error('Failed to fetch single service data:', error);
      // Return fallback data
      return {
        success: false,
        service: {
          _id: serviceId || '68f8a3641fa08193f866794e',
          title: "Community Living Support",
          shortDescription: "Comprehensive residential support services for individuals with disabilities",
          detailedDescription: `
            <p>Our Community Living Support program provides comprehensive residential services designed to help individuals with disabilities live as independently as possible in a safe, supportive environment.</p>
            
            <h4>Our Approach</h4>
            <p>We believe that everyone deserves to live in a place they can call home. Our experienced care teams work closely with each individual to develop personalized support plans that promote independence while ensuring safety and wellbeing.</p>
            
            <h4>Services Include:</h4>
            <ul>
              <li>24/7 support staff availability</li>
              <li>Medication management and health monitoring</li>
              <li>Daily living skills training</li>
              <li>Personal care assistance</li>
              <li>Community integration activities</li>
              <li>Transportation services</li>
              <li>Recreational and social programs</li>
            </ul>
            
            <h4>Safe & Comfortable Environment</h4>
            <p>All of our homes are fully furnished, accessible, and maintained to the highest standards. We ensure that each resident has their own private space while also providing common areas for social interaction and community activities.</p>
          `,
          image: "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/community-living.jpg"
        }
      };
    }
  }
};