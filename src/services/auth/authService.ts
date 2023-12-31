import LocalStorage from "../localStorage/localStorage";
import WooCommerceAuth, { AuthCredentials } from "./wooCommerceAuth";

class AuthService {
  static isAuthenticated() {
    // todo: add other logical authentication
    const accessToken =
      !!LocalStorage.getConsumerKey() && !!LocalStorage.getConsumerSecret();
    return !!accessToken;
  }

  static logout() {
    LocalStorage.removeToken();
  }

  static async login(credentials: AuthCredentials) {
    try {
      return await WooCommerceAuth(credentials);
    } catch (error) {
      console.log("error :>> ", error);
    }
  }
}

export default AuthService;
