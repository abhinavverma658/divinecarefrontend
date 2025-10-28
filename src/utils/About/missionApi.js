// Mission API endpoints for About page
import { apiRequest } from '../api';

export const missionAPI = {
  // Get mission section data
  getMission: async () => {
    try {
      console.log('📄 Fetching mission data from /about/mission...');
      const response = await apiRequest('/about/mission');
      console.log('📄 Mission data response:', response);
      if (response && response.success && response.mission) {
        return response.mission;
      }
      throw new Error('Invalid mission data structure');
    } catch (error) {
      console.error('Failed to fetch mission data:', error);
      // Return fallback data
      return {
        heading: 'Our Mission',
        description: 'To empower communities through compassion, support, and innovative programs that make a real difference.',
        image: '',
        points: [
          'Empowering individuals and families.',
          'Building strong, supportive communities.',
          'Promoting health and well-being.',
          'Driving positive change through action.'
        ]
      };
    }
  }
};
