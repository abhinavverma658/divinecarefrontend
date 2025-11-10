// Get BASE_URL from env
const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://divine-care.ap-south-1.storage.onantryk.com';

// Log the BASE_URL on module load for debugging
console.log('🌍 Image Utils - BASE_URL configured as:', BASE_URL);
console.log('🌍 Environment variables:', {
  VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
  VITE_API_URL: import.meta.env.VITE_API_URL
});

/**
 * Converts a relative or absolute image path to a full URL
 * @param {string} val - The image path/URL
 * @returns {string} - The full image URL
 */
export const getImageUrl = (val) => {
  if (!val) {
    console.log('🖼️ getImageUrl: Empty value provided');
    return '';
  }
  
  // If already a full URL (http:// or https://), return as is
  if (/^https?:\/\//i.test(val)) {
    console.log('🖼️ getImageUrl: Already full URL:', val);
    return val;
  }
  
  // Otherwise, prepend the BASE_URL
  const baseUrl = BASE_URL.replace(/\/$/, ''); // Remove trailing slash
  const path = val.replace(/^\/+/, ''); // Remove leading slashes
  const fullUrl = `${baseUrl}/${path}`;
  
  console.log('🖼️ getImageUrl conversion:', {
    input: val,
    baseUrl: BASE_URL,
    output: fullUrl
  });
  
  return fullUrl;
};
