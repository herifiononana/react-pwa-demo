import { AxiosResponse } from "axios";
import axios from "../../config/axiosConfig";
import LocalStorage from "../localStorage/localStorage";

interface CartItem {
  product_id: number;
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
  // ... other cart field
}

interface CartResponse {
  id: number;
  items: CartItem[];
  total: number;
  subtotal: number;
  // ... other cart detail
}

const url = "/cart";

const CartProduct = {
  getCart: async (): Promise<CartResponse> => {
    const accessToken = LocalStorage.getToken();
    try {
      const response: AxiosResponse<CartResponse> = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        return response.data;
      } else {
        console.error(
          "Unexpected response when retrieving the basket:",
          response
        );
        throw new Error("Error when retrieving the basket.");
      }
    } catch (error) {
      console.error("Error when retrieving the basket.", error);
      throw new Error("Basket retrieval error.");
    }
  },

  //   todo: create method addProduct, updateItem, removeItem, clearItem and other if necessary
};
export default CartProduct;
// // Exemple of use
// CartProduct.getCart()
//   .then((cart: CartResponse) => {
//     console.log("Basket successfully retrieved:", cart);
//     // Do something with the basket data
//   })
//   .catch((error: Error) => {
//     console.error("Error when retrieving the basket.", error.message);
//     // Handle error appropriately
//   });
