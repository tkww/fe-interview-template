
import axios from "axios";

export default {
  getThemes: function () {
    return axios.get("https://qa-static.theknot.com/wws-themes/themes.json");
  },
};