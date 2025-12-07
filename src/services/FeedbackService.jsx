import { allApiEndponts } from "./ApiUrl";
import axiosInstance from "./interceptor/interceptor";

export class FeedbackService {
  async getllFeedback() {
    try {
      const response = await axiosInstance.get(allApiEndponts.getAllfeedback);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching feedback", error);
    }
  }
}
