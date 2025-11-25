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
}
