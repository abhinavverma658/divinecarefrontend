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
  }
};