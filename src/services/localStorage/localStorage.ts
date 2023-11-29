const LocalStorage = {
  setToken: (token: string) => {
    localStorage.setItem("accessToken", token);
  },

  setConsumerKey: (consumerKey: string) => {
    localStorage.setItem("consumerKey", consumerKey);
  },

  setConsumerSecret: (consumerSecret: string) => {
    localStorage.setItem("consumerSecret", consumerSecret);
  },

  getToken: () => localStorage.getItem("accessToken"),

  getConsumerKey: () => localStorage.getItem("consumerKey"),

  removeToken: () => {
    localStorage.removeItem("consumerKey");
    localStorage.removeItem("consumerSecret");
  },

  getConsumerSecret: () => localStorage.getItem("consumerSecret"),

  setExpirationToken: (expiresIn: number) => {
    localStorage.setItem(
      "tokenExpiration",
      (Date.now() + expiresIn * 1000).toString()
    );
  },
};

export default LocalStorage;
