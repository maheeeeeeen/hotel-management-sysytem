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
  async createRoom(body) {
    try {
      const response = await axiosInstance.post(allApiEndponts.addRoom, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Adding room error:", error);

      throw error;
    }
  }
  async updateRoom(id, body) {
    try {
      const response = await axiosInstance.put(
        `${allApiEndponts.updateRoom}/${id}`,
        body,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error while editing:", error);

      throw error;
    }
  }
  async deleteRoom(id) {
    try {
      const response = await axiosInstance.delete(
        `${allApiEndponts.deleteRoom}/${id}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error while deleting room", error);
    }
  }
}
