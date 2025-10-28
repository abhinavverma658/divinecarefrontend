// Events API endpoints for Event page
import { apiRequest } from './api';

export const eventsAPI = {
  // Get all events
  getEvents: async () => {
    try {
      console.log('📅 Fetching events data from /events...');
      const response = await apiRequest('/events');
      console.log('📅 Events data response:', response);
      
      if (response && response.success && response.events) {
        console.log('📅 ✅ Events data retrieved successfully');
        return response;
      }
      
      throw new Error('Invalid events data structure');
    } catch (error) {
      console.error('Failed to fetch events data:', error);
      // Return fallback data
      return {
        success: false,
        events: []
      };
    }
  },

  // Get single event by ID
  getSingleEvent: async (eventId) => {
    try {
      console.log(`📅 Fetching single event data from /events/${eventId}...`);
      const response = await apiRequest(`/events/${eventId}`);
      console.log('📅 Single event data response:', response);
      
      if (response && response.success && response.event) {
        console.log('📅 ✅ Single event data retrieved successfully');
        return response;
      }
      
      throw new Error('Invalid single event data structure');
    } catch (error) {
      console.error('Failed to fetch single event data:', error);
      // Return fallback data
      return {
        success: false,
        event: {
          _id: eventId || '68fb6a1d98eae1d652ad2385',
          title: "Annual Charity Gala",
          shortDescription: "Join us for an evening of giving and celebration",
          description: "Our annual charity gala brings together supporters and beneficiaries for an unforgettable evening. Enjoy dinner, entertainment, and learn about our impact in the community.",
          startDate: "2025-12-15T18:00:00.000Z",
          endDate: "2025-12-15T22:00:00.000Z",
          location: "Grand Ballroom, City Center",
          venueDetails: "Formal attire required. Valet parking available.",
          image: "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/charity-gala.jpg"
        }
      };
    }
  }
};