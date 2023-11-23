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

interface AddProductRequest {
  product_id: number;
  quantity: number;
}

interface UpdateItemRequest {
  key: string; // Unique key to item in basket
  quantity: number;
}

interface RemoveItemRequest {
  key: string; // Unique key to item in basket
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

  addProduct: async (requestData: AddProductRequest): Promise<void> => {
    const accessToken = LocalStorage.getToken();
    try {
      const addProductUrl = `${url}/add`;

      const response: AxiosResponse = await axios.post(
        addProductUrl,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        console.error(
          "Unexpected response when adding product to cart:",
          response
        );
        throw new Error("Error adding product to cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart :", error);
      throw new Error("Error adding product to cart.");
    }
  },

  updateItem: async (requestData: UpdateItemRequest): Promise<void> => {
    try {
      const updateItemUrl = `${url}/update-item`;
      const accessToken = LocalStorage.getToken();

      const response: AxiosResponse = await axios.post(
        updateItemUrl,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        console.error(
          "Unexpected response when updating item quantity:",
          response
        );
        throw new Error("Error updating item quantity in basket.");
      }
    } catch (error) {
      console.error("Error updating item quantity in basket:", error);
      throw new Error("Error updating item quantity in basket.");
    }
  },

  removeItem: async (requestData: RemoveItemRequest): Promise<void> => {
    try {
      const removeItemUrl = `${url}/remove-item`;
      const accessToken = LocalStorage.getToken();

      const response: AxiosResponse = await axios.post(
        removeItemUrl,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        console.error(
          "Unexpected response when removing the item from the basket:",
          response
        );
        throw new Error("Error deleting item from cart.");
      }
    } catch (error) {
      console.error("Error deleting item from cart:", error);
      throw new Error("Error deleting item from cart.");
    }
  },

  clearCart: async (): Promise<void> => {
    try {
      const clearCartUrl = `${url}/clear`;
      const accessToken = LocalStorage.getToken();

      const response: AxiosResponse = await axios.post(
        clearCartUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        console.error(
          "Unexpected response when deleting all items from the basket:",
          response
        );
        throw new Error("Error deleting all items from cart.");
      }
    } catch (error) {
      console.error("Error deleting all items from cart:", error);
      throw new Error("Error deleting all items from cart.");
    }
  },
};
export default CartProduct;
