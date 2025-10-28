// Company API endpoints for About page
import { apiRequest } from '../api';

export const companyAPI = {
  // Get company stats section data
  getCompany: async () => {
    try {
      console.log('📄 Fetching company data from /about/company...');
      const response = await apiRequest('/about/company');
      console.log('📄 Company data response:', response);
      if (response && response.success && response.company) {
        return response.company;
      }
      throw new Error('Invalid company data structure');
    } catch (error) {
      console.error('Failed to fetch company data:', error);
      // Return fallback data
      return {
        heading: 'Our Mission & Vision',
        description: 'We strive to create a world where compassion and innovation drive positive change for all.',
        stats: [
          { title: '12+', content: 'Years of Fundation' },
          { title: '69+', content: 'Monthly Donate' },
          { title: '3+', content: 'Global Partners' },
          { title: '93+', content: 'Projects Complete' }
        ]
      };
    }
  }
};
