export default class Helper {
  setToken(token, role, expirationTimeInMinutes = 1440) {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    setTimeout(() => {
      this.removeToken();
    }, expirationTimeInMinutes * 60 * 1000);
  }

  // Return just the token string, not an object
  getToken() {
    return localStorage.getItem("token");
  }

  getRole() {
    return localStorage.getItem("role");
  }

  removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }
}