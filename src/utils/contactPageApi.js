// Contact Page API endpoints
import { apiRequest } from './api';

export const contactPageAPI = {
  // Get contact page data
  getContactPage: async () => {
    try {
      console.log('📞 Fetching contact page data from /contact-page...');
      const response = await apiRequest('/contact-page');
      console.log('📞 Contact page data response:', response);
      
      if (response && response.success !== false) {
        console.log('📞 ✅ Contact page data retrieved successfully');
        return response;
      }
      
      throw new Error('Invalid contact page data structure');
    } catch (error) {
      console.error('Failed to fetch contact page data:', error);
      // Return fallback data
      return {
        callUs: {
          serviceTitle: "24/7 Service",
          serviceSubtitle: "Call Us Today",
          phoneNumber1: "+00 123 456 789",
          phoneNumber2: "+00 987 654 321"
        },
        mailInfo: {
          emailTitle: "Drop Line",
          emailSubtitle: "Mail Information",
          emailAddress1: "info@charity.com",
          emailAddress2: "infocharity@gmail.com"
        },
        location: {
          addressTitle: "Address",
          addressSubtitle: "Our Location",
          fullAddress: "123 Main Street, City, Country"
        },
        pageHeading: "Contact Us",
        pageDescription: "Reach out to us for any queries or support. We are here to help you.",
        googleMapsEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.04421055503!2d-118.74139674995793!3d34.020608447020685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1734253501055!5m2!1sen!2sbd"
      };
    }
  }
};