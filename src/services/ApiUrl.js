import { environment } from "../environment/environment";

export const allApiEndponts = {
  //------------------- AUTHENTICATION -----------------
  signUp: `${environment.baseUrl}signup`,
  login: `${environment.baseUrl}login`,
  getProfile: `${environment.baseUrl}profile`,
  updateUser: `${environment.baseUrl}update`,

  //-------------------- ROOM ROUTES -------------------

  addRoom: `${environment.baseUrl}createroom`,
  allRooms: `${environment.baseUrl}rooms`,
  getRoomById: `${environment.baseUrl}room`,
  updateRoom: `${environment.baseUrl}room`,
  deleteRoom: `${environment.baseUrl}room`,

  // -------- BOOKING ROUTES ------------------------------
  addbooking: `${environment.baseUrl}createbooking`,
  getAllbookings: `${environment.baseUrl}bookings`,
  cancelbookings:`${environment.baseUrl}cancelbooking`,

  //---------------- FEEDBACK ROUTES ------------------------
  addfeedback: `${environment.baseUrl}createFeedback`,
  getAllfeedback: `${environment.baseUrl}feedbacks`,
  deletefeedback: `${environment.baseUrl}feedback`,
};
