import { AxiosResponse } from "axios";
import axios from "../../config/axiosConfig";
import LocalStorage from "../localStorage/localStorage";

export interface AuthCredentials {
  username: string;
  password: string;
}

const WooCommerceAuth = async (
  credentials: AuthCredentials,
  navigateCallback: () => void
) => {
  const url = "user/v0/login";
  try {
    const requestData = {
      data: {
        username: credentials.username,
        password: credentials.password,
      },
    };

    const response: AxiosResponse = await axios.post(url, requestData);
    console.log("response.data :>> ", response);

    if (
      response.data.user.data &&
      response.data.consumer_key &&
      response.data.consumer_Secret
    ) {
      LocalStorage.setConsumerKey(response.data.user.consumer_key);
      LocalStorage.setConsumerSecret(response.data.user.consumer_Secret);
      navigateCallback();
    }

    if (response.data.user.error)
      throw new Error("incorect username or password");

    return response.data.user;
  } catch (error) {
    console.error("Error during token acquisition:", error);
  }
};

export default WooCommerceAuth;
