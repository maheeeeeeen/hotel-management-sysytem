import { allApiEndponts } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class RoomService {
  async AllRooms() {
    try {
      const response = await axiosInstance.get(allApiEndponts.allRooms);
      return response.data;
    } catch (error) {
      console.error("Get booking error:", error);

      throw error;
    }
  }
}
