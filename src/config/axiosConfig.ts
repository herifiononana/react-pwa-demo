import axios from "axios";

const axiosConfig = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL ||
    "https://stg-maisonbreuer-breuerdev.kinsta.cloud/wp-json/",
  headers: {
    // add other common header if necessary
    "Content-Type": "application/json",
  },
});

export default axiosConfig;
