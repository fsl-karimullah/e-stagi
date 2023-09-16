// api.ts

import axios, { AxiosResponse, AxiosError } from 'axios';
import { API_ENDPOINTS } from '../services/api';

// Define the base URL of your API
const BASE_URL = API_ENDPOINTS.REGISTER; // Replace with your actual API URL


// Define the data types for the request and response
interface RegistrationRequest {
  student_nis: string;
  password: string;
}
 
interface x {
  message: string; 
  // Add other response fields as needed
}

// Function to make a registration API call
export const register = async (
  registrationData: RegistrationRequest
): Promise<RegistrationResponse> => {
  try {
    const response: AxiosResponse<RegistrationResponse> = await axios.post(
      BASE_URL,
      registrationData
    ); 

    // Assuming the API returns a response with a message field
    const { message } = response.data;
    
    return { message };
  } catch (error) {
    // Handle errors here
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        // The request was made and the server responded with an error status code
        const { data, status } = axiosError.response;
        console.error(`Request failed with status ${status}:`, data);
        throw new Error(`Request failed with status ${status}`);
      } else if (axiosError.request) {
        // The request was made but no response was received
        console.error('No response received:', axiosError.request);
        throw new Error('No response received from the server');
      } else {
        // Something else happened while setting up the request
        console.error('Error setting up the request:', axiosError.message);
        throw new Error('Error setting up the request');
      }
    } else {
      // Handle non-Axios errors
      console.error('Non-Axios error occurred:', error);
      throw new Error('An error occurred');
    }
  }
};
