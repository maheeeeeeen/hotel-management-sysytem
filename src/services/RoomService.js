import axios from "axios";
import { allApiEndponts } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class RoomService {
  async AllRooms() {
    try {
      const response = await axios.get(allApiEndponts.allRooms);
      return response.data;
    } catch (error) {
      console.error("fetching room error:", error);

      throw error;
    }
  }

  async getRoomById(id) {
    try {
      const response = await axios.get(`${allApiEndponts.getRoomById}/${id}`);
      return response.data;
    } catch (error) {
      console.error("fetching room error:", error);

      throw error;
    }
  }
}
