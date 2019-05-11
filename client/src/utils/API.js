import axios from "axios";

export default {
  getLunch: function() {
    return axios.get("/api/lunch");
  },
  getDinner: function() {
    return axios.get("/api/dinner");
  },
  getAppetizers: function() {
    return axios.get("/api/appetizers");
  },
  saveLunchItem: function(lunchItem) {
    return axios.post("/api/lunch", lunchItem);
  },
  saveDinnerItem: function(dinnerItem) {
    return axios.post("/api/dinner", dinnerItem);
  },
  saveAppetizerItem: function(appItem) {
    return axios.post("/api/appetizers", appItem);
  }
};