import { allApiEndponts } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class bookingService {
  async getAllBookings() {
    try {
      const response = await axiosInstance.get(allApiEndponts.getAllbookings);
      return response.data;
    } catch (error) {
      console.error("Get booking error:", error);

      throw error;
    }
  }

  async createbooking(body) {
    try {
      const response = await axiosInstance.post(
        allApiEndponts.addbooking,
        body
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Get booking error:", error);

      throw error;
    }
  }
  async getBookingbyId(id) {
    try {
      const response = await axiosInstance.get(
        `${allApiEndponts.getbookingByid}/${id}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Get booking error:", error);

      throw error;
    }
  }
}
