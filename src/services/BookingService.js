import axios from "axios";
import { allApiEndponts } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class bookingService {
  async getAllUserBookings() {
    try {
      const response = await axiosInstance.get(
        allApiEndponts.getAllUserbookings
      );
      return response.data;
    } catch (error) {
      console.error("Get booking error:", error);

      throw error;
    }
  }
  async getAllBookings() {
    try {
      const response = await axios.get(allApiEndponts.getAllbookings);
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

 async cancelBooking(id, data) {
  try {
    const response = await axiosInstance.delete(
      `${allApiEndponts.cancelbookings}/${id}`,
      {
        data: data, // <-- DELETE body MUST be inside data:
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Cancelling booking error:", error);
    throw error;
  }
}

async confirmBooking(id , data) {
  try {
    const response = await axiosInstance.put(
      `${allApiEndponts.confirmbookings}/${id}`, 
      {data}, // empty body
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Confirm booking error:", error);
    throw error;
  }
}

}
