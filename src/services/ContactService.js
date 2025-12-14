import axios from "axios";
import { allApiEndponts } from "./ApiUrl";

export class ContactService {
  // Get all contact submissions
  async getAllContacts() {
    try {
      const response = await axios.get(allApiEndponts.getContact);
      return response.data;
    } catch (error) {
      console.error("Error fetching contact data:", error);
      throw error;
    }
  }

  // Create contact us entry
  async createContact(body) {
    try {
      const response = await axios.post(allApiEndponts.addContact, body);
      return response.data;
    } catch (error) {
      console.error("Error creating contact:", error);
      throw error;
    }
  }
}
