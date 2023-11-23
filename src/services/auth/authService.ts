import WooCommerceAuth, { AuthCredentials } from "./wooCommerceAuth";

class AuthService {
  static isAuthenticated() {
    // todo: add other logical authentication

    const accessToken = localStorage.getItem("accessToken");
    return !!accessToken;
  }

  static logout() {
    localStorage.removeItem("accessToken");
  }

  static async login(
    credentials: AuthCredentials,
    navigateCallback: () => void
  ) {
    await WooCommerceAuth(credentials, navigateCallback);
  }
}

export default AuthService;
