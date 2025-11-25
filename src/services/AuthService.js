import axios from "axios";
import { allApiEndponts } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class AuthService {
  async SignUp(body) {
    try {
      const response = await axios.post(allApiEndponts.signUp, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Signup error:", error);

      throw error;
    }
  }
  async login(body) {
    try {
      const response = await axios.post(allApiEndponts.login, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("login error:", error);

      throw error;
    }
  }

  async getProfile() {
    try {
      const response = await axiosInstance.get(allApiEndponts.getProfile);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Profile error:", error);

      throw error;
    }
  }
}

export default AuthService;
