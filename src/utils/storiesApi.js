// Stories API endpoints for Blog pages
import { apiRequest } from './api';

export const storiesAPI = {
  // Get all stories
  getStories: async () => {
    try {
      console.log('📖 Fetching stories data from /stories...');
      const response = await apiRequest('/stories');
      console.log('📖 Stories data response:', response);
      
      if (response && Array.isArray(response)) {
        console.log('📖 ✅ Stories data retrieved successfully');
        return {
          success: true,
          stories: response
        };
      }
      
      throw new Error('Invalid stories data structure');
    } catch (error) {
      console.error('Failed to fetch stories data:', error);
      // Return fallback data
      return {
        success: false,
        stories: [
          {
            "_id": "68f8ae4944d547973f86a769",
            "title": "Inspiring Recovery",
            "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/story.jpg",
            "author": "Jane Doe",
            "content": "This is an inspiring story of recovery and hope, shared by Jane.",
            "date": "2025-10-22T00:00:00.000Z"
          },
          {
            "_id": "68f8ae6944d547973f86a76c",
            "title": "Community Support Success",
            "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/community.jpg",
            "author": "John Smith",
            "content": "A heartwarming tale of how community support changed lives and brought hope to families in need.",
            "date": "2025-10-20T00:00:00.000Z"
          },
          {
            "_id": "68f8ae6e44d547973f86a76f",
            "title": "Volunteer Impact Story",
            "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/volunteer.jpg",
            "author": "Sarah Johnson",
            "content": "Learn how dedicated volunteers are making a difference in their communities through acts of kindness.",
            "date": "2025-10-18T00:00:00.000Z"
          },
          {
            "_id": "68f8ae7444d547973f86a772",
            "title": "Healthcare Initiative Success",
            "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/healthcare.jpg",
            "author": "Dr. Michael Brown",
            "content": "Discover how our healthcare initiatives are improving access to medical care in underserved areas.",
            "date": "2025-10-16T00:00:00.000Z"
          }
        ]
      };
    }
  }
};