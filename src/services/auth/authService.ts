class AuthService {
  static isAuthenticated() {
    // todo: add other logical authentication

    const accessToken = localStorage.getItem("accessToken");
    return !!accessToken;
  }

  static logout() {
    localStorage.removeItem("accessToken");
  }
}

export default AuthService;
