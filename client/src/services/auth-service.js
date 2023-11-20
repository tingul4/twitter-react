import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

class AuthService {
  login(account, password) {
    return axios.post(API_URL + "/login", { account, password });
  }

  logout() {
    localStorage.removeItem("user");
  }

  signup(account, name, email, password, checkPassword) {
    return axios.post(API_URL + "/signup", {
      account,
      name,
      email,
      password,
      checkPassword
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  testToken() {
    const token = JSON.parse(localStorage.getItem("user"))?.token
    return axios.get(API_URL + "/testToken", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(() => ({success: true}))
    .catch(err => ({success: false}))
  }
}

const authService = new AuthService();
export default authService;
