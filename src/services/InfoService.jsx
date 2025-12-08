import axios from "axios";
import { allApiEndponts } from "./ApiUrl";

export class InfoService {
  async AllInfo() {
    try {
      const response = await axios.get(allApiEndponts.getInfo);
      return response.data;
    } catch (error) {
      console.error("fetching info error:", error);

      throw error;
    }
  }

  async getInfoById(id) {
    try {
      const response = await axios.get(`${allApiEndponts.getinfobyid}/${id}`);
      return response.data;
    } catch (error) {
      console.error("fetching info error:", error);

      throw error;
    }
  }
  async addInfo(body) {
    try {
      const response = await axios.post(allApiEndponts.addInfo, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Adding info error:", error);

      throw error;
    }
  }
  async updateInfo(id, body) {
    try {
      const response = await axios.put(
        `${allApiEndponts.updateInfo}/${id}`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
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
}
