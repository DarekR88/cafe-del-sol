import axios from "axios";

export default {
  getLunch: function() {
    return axios.get("/api/lunch");
  },
  getDinner: function() {
    return axios.get("/api/dinner")
  },
  getAppetizers: function() {
    return axios.get("/api/appetizers")
  }
};
