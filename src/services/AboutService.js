import axios from "axios";
import { allApiEndponts } from "./ApiUrl";

export class AboutService {
  async GetAllContent() {
    try {
      const response = await axios.get(allApiEndponts.getAllContent);
      return response.data;
    } catch (error) {
      console.error("fetching info error:", error);

      throw error;
    }
  }

  //------Gallery-----
  async getAllGallery() {
    try {
      const response = await axios.get(allApiEndponts.getAllGallery);
      return response.data;
    } catch (error) {
      console.error("fetching gallery error:", error);

      throw error;
    }
  }
}
