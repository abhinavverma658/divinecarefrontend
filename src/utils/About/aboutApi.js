// About API endpoints for About page
import { apiRequest } from '../api';

export const aboutAPI = {
  // Get main about section data
  getMainAbout: async () => {
    try {
      console.log('📄 Fetching about main data from /about/main...');
      const response = await apiRequest('/about/main');
      console.log('📄 About main data response:', response);
      
      if (response && response.success && response.about) {
        console.log('📄 ✅ About main data retrieved successfully');
        return response;
      }
      
      throw new Error('Invalid about data structure');
    } catch (error) {
      console.error('Failed to fetch about main data:', error);
      // Return fallback data
      return {
        success: false,
        about: {
          heading: 'About DivineCare',
          smallDescription: 'Empowering lives through compassion and support.',
          mainDescription: 'DivineCare is dedicated to providing relief and resources to those in need, fostering a community of care and hope.',
          images: [],
          keyPoints: [
            'Compassionate support for all.',
            'Community-driven initiatives.',
            'Trusted by thousands.'
          ]
        }
      };
    }
  }
};
