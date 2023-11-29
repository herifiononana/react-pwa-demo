// import { AxiosResponse } from "axios";
// import axios from "../../config/axiosConfig";
import LocalStorage from "../localStorage/localStorage";

export interface AuthCredentials {
  username: string;
  password: string;
}

const WooCommerceAuth = async (credentials: AuthCredentials) => {
  // const url = "user/v0/login";
  const { username, password } = credentials;
  try {
    // todo: decoment when the problem is solved
    // const requestData = {
    //   data: {
    //     username: username,
    //     password: password,
    //   },
    // };

    // const response: AxiosResponse = await axios.post(url, requestData);
    // console.log("response.data :>> ", response);

    // if (
    //   response.data.user.data &&
    //   response.data.consumer_key &&
    //   response.data.consumer_Secret
    // ) {
    //   LocalStorage.setConsumerKey(response.data.user.consumer_key);
    //   LocalStorage.setConsumerSecret(response.data.user.consumer_Secret);
    //   navigateCallback();
    // }

    // if (response.data.user.error)
    //   throw new Error("incorect username or password");

    // return response.data.user;

    if (
      !(
        username.toLowerCase() === "hello" &&
        password === "1tlO&m3#P^pVuGm112Dgn2%4"
      )
    )
      throw new Error("incorect username or password");

    LocalStorage.setConsumerKey("staticConsumerKey");
    LocalStorage.setConsumerSecret("staticConsumerSecret");
    return {
      data: {
        username,
      },
    };
  } catch (error) {
    console.error("Error during token acquisition:", error);
  }
};

export default WooCommerceAuth;
