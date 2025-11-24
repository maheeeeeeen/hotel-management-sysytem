import axios from "axios";
import { allApiEndponts } from "./ApiUrl";

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
}
export default AuthService;