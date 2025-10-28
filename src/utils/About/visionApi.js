// Vision API endpoints for About page
import { apiRequest } from '../api';

export const visionAPI = {
  // Get vision section data
  getVision: async () => {
    try {
      console.log('📄 Fetching vision data from /about/vision...');
      const response = await apiRequest('/about/vision');
      console.log('📄 Vision data response:', response);
      if (response && response.success && response.vision) {
        return response.vision;
      }
      throw new Error('Invalid vision data structure');
    } catch (error) {
      console.error('Failed to fetch vision data:', error);
      // Return fallback data
      return {
        heading: 'Our Mission & Vision',
        description: 'We strive to create a world where compassion and innovation drive positive change for all.',
        image: '',
        tabs: [
          { title: 'Our Mission', content: 'Empowering communities through support and resources.' },
          { title: 'Our Vision', content: 'A future where every individual has access to care and opportunity.' },
          { title: 'Our Values', content: 'Integrity, compassion, and excellence in all we do.' }
        ]
      };
    }
  }
};
