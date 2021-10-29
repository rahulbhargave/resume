import axios from "axios";

export default axios.create({
  baseURL: "/resume.static.data",
  headers: {
    "Content-type": "application/json"
  }
});