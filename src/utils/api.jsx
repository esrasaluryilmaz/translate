import axios from "axios";

const api = axios.create({
  baseURL: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "x-rapidapi-key": "52bc7bf7e0msh48728d5df09c44ep1782e7jsn086e5e29a2c2",
    "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
  },
});

export default api;
