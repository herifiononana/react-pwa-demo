import axios, { AxiosResponse } from "axios";

interface AuthCredentials {
  username: string;
  password: string;
}

const WooCommerceAuth = async (
  credentials: AuthCredentials,
  navigateCallback: () => void
): Promise<void> => {
  const consumerKey: string | undefined = process.env.REACT_APP_CONSUMER_KEY;
  const consumerSecret: string | undefined =
    process.env.REACT_APP_CONSUMER_SECRET;
  const baseUrl: string =
    process.env.REACT_APP_BASE_URL ||
    "https://votre-site-wordpress/wp-json/wc/v3";

  if (!consumerKey || !consumerSecret) {
    console.error("API keys missing. Check your .env file.");
    return;
  }

  const accessToken: string | null = localStorage.getItem("accessToken");
  const tokenExpiration: string | null =
    localStorage.getItem("tokenExpiration");

  if (accessToken && tokenExpiration) {
    const expirationTime: number = parseInt(tokenExpiration, 10);

    // Check if the token has expired
    if (Date.now() > expirationTime) {
      try {
        const requestData = {
          method: "POST",
          url: `${baseUrl}/oauth/token`,
          data: {
            grant_type: "password",
            username: credentials.username,
            password: credentials.password,
          },
          auth: {
            username: consumerKey,
            password: consumerSecret,
          },
        };

        const response: AxiosResponse = await axios(requestData);

        if (response.status === 200) {
          const newAccessToken: string = response.data.access_token;
          const expiresIn: number = response.data.expires_in;

          // Store the new access token and its expiration time
          localStorage.setItem("accessToken", newAccessToken);
          localStorage.setItem(
            "tokenExpiration",
            (Date.now() + expiresIn * 1000).toString()
          );

          console.log("New Access Token:", newAccessToken);
          navigateCallback();
        } else {
          console.error("Unexpected response during token renewal:", response);
        }
      } catch (error) {
        console.error("Error during token renewal:", error);
      }
    } else {
      // Use the existing token in your subsequent requests to the WooCommerce API
      console.log("Existing Access Token:", accessToken);
    }
  } else {
    // The token is not available, obtain a new token
    try {
      const requestData = {
        method: "POST",
        url: `${baseUrl}/oauth/token`,
        data: {
          grant_type: "password",
          username: credentials.username,
          password: credentials.password,
        },
        auth: {
          username: consumerKey,
          password: consumerSecret,
        },
      };

      const response: AxiosResponse = await axios(requestData);

      if (response.status === 200) {
        const newAccessToken: string = response.data.access_token;
        const expiresIn: number = response.data.expires_in;

        // Store the new access token and its expiration time
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem(
          "tokenExpiration",
          (Date.now() + expiresIn * 1000).toString()
        );

        console.log("New Access Token:", newAccessToken);
        navigateCallback();
      } else {
        console.error(
          "Unexpected response during token acquisition:",
          response
        );
      }
    } catch (error) {
      console.error("Error during token acquisition:", error);
    }
  }
};

export default WooCommerceAuth;
