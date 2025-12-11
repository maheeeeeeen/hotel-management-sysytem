import { environment } from "../environment/environment";

export const allApiEndponts = {
  //------------------- AUTHENTICATION -----------------
  signUp: `${environment.baseUrl}signup`,
  login: `${environment.baseUrl}login`,
  getProfile: `${environment.baseUrl}profile`,
  updateUser: `${environment.baseUrl}update`,
  getAllUsers: `${environment.baseUrl}users`,

  //-------------------- ROOM ROUTES -------------------

  addRoom: `${environment.baseUrl}createroom`,
  allRooms: `${environment.baseUrl}rooms`,
  getRoomById: `${environment.baseUrl}room`,
  updateRoom: `${environment.baseUrl}room`,
  deleteRoom: `${environment.baseUrl}room`,

  // -------- BOOKING ROUTES ------------------------------
  addbooking: `${environment.baseUrl}createbooking`,
  getAllbookings: `${environment.baseUrl}bookings`,
  getAllUserbookings: `${environment.baseUrl}userbooking`,
  getbookingByid: `${environment.baseUrl}booking`,
  cancelbookings: `${environment.baseUrl}cancelbooking`,
  confirmbookings: `${environment.baseUrl}confirmbooking`,

  //---------------- FEEDBACK ROUTES ------------------------
  addfeedback: `${environment.baseUrl}createFeedback`,
  getAllfeedback: `${environment.baseUrl}feedbacks`,
  deletefeedback: `${environment.baseUrl}feedback`,

  //--------------- CONTACT INFO -----------------------------
  getInfo: `${environment.baseUrl}info`,
  addInfo: `${environment.baseUrl}addinfo`,
  getinfobyid: `${environment.baseUrl}info`,
  updateInfo: `${environment.baseUrl}info`,

  //------------------ ABOUT INFO -----------------------------
  createAbout: `${environment.baseUrl}add`,
  getAllContent: `${environment.baseUrl}allcontent`,
};
