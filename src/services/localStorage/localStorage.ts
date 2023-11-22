const LocalStorage = {
  setToken: (token: string) => {
    localStorage.setItem("accessToken", token);
  },

  getToken: () => localStorage.getItem("accessToken"),

  setExpirationToken: (expiresIn: number) => {
    localStorage.setItem(
      "tokenExpiration",
      (Date.now() + expiresIn * 1000).toString()
    );
  },
};

export default LocalStorage;
