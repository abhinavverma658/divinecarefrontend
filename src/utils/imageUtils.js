// Get BASE_URL from env
const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://divine-care.ap-south-1.storage.onantryk.com';

/**
 * Converts a relative or absolute image path to a full URL
 * @param {string} val - The image path/URL
 * @returns {string} - The full image URL
 */
export const getImageUrl = (val) => {
  if (!val) {
    return '';
  }
  
  // If already a full URL (http:// or https://), return as is
  if (/^https?:\/\//i.test(val)) {
    return val;
  }
  
  // Otherwise, prepend the BASE_URL
  const baseUrl = BASE_URL.replace(/\/$/, ''); // Remove trailing slash
  const path = val.replace(/^\/+/, ''); // Remove leading slashes
  const fullUrl = `${baseUrl}/${path}`;
  
  return fullUrl;
};
