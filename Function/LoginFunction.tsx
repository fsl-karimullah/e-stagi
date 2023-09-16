import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_ENDPOINTS } from "../services/api";
import { resetUserData, saveUserData } from "../redux/actions/userDataAction";
import { useDispatch } from "react-redux";

// Define your API endpoint for student login
const API_URL = API_ENDPOINTS.LOGIN; 

// Create a function for student login
const studentLogin = async (nis: string, password: string, dispatch:any) => {
  try {
    // Make a POST request to the API endpoint with student credentials
    const response = await axios.post(API_URL, {
      nis: nis,
      password: password,
    });

    // Assuming the API returns a token upon successful login
    const token = response.data.data.token; // Access the token directly
    console.log(response.data.data.token);

    // Dispatch the action to save user data
    dispatch({
      type: "STORING_USER_DATA",
      payload: { token, userData: response.data.data },
    });

    // Store the token in AsyncStorage or Redux for later use
    // For example, using AsyncStorage:
    await AsyncStorage.setItem("@userToken", token);

    // Return the token or user data if needed
    return token;
  } catch (error) {
    // Handle login error
    if (error.response) {
      // The request was made, but the server responded with an error status code
      console.error("Login error:", error.response.data);
      throw new Error("Invalid student ID or password");
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("No response received:", error.request);
      throw new Error("No response from server");
    } else {
      // Something happened in setting up the request
      console.error("Request error:", error.message);
      throw new Error("Request error");
    }
  }
};

export default studentLogin;
