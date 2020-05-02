import axios from "axios";

const instance = axios.create({
  baseURL: "http://5eab0478a280ac00166570ca.mockapi.io/api/",
});

export default instance;
