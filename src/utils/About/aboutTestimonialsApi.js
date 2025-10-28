// About Testimonials API endpoints for About page
import { apiRequest } from '../api';

export const aboutTestimonialsAPI = {
  // Get about testimonials section data
  getAboutTestimonials: async () => {
    try {
      console.log('📄 Fetching about testimonials data from /about/testimonials...');
      const response = await apiRequest('/about/testimonials');
      console.log('📄 About testimonials data response:', response);
      if (response && response.success && response.about) {
        return response.about;
      }
      throw new Error('Invalid about testimonials data structure');
    } catch (error) {
      console.error('Failed to fetch about testimonials data:', error);
      // Return fallback data
      return {
        sectionHeading: 'Testimonials',
        sectionDescription: 'Hear from our volunteers and clients.',
        statistics: [
          { number: '569+', label: 'Satisfied Clients' },
          { number: '12+', label: 'Years of Experience' }
        ],
        testimonials: []
      };
    }
  }
};
