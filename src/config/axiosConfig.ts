import axios from "axios";

const axiosConfig = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL || "https://votre-site-wordpress/wp-json",
  timeout: 5000,
  headers: {
    // add other common header if necessary
    "Content-Type": "application/json",
  },
});

export default axiosConfig;
