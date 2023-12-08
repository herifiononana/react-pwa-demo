import { AxiosResponse } from "axios";
import axios from "../../config/axiosConfig";
import LocalStorage from "../localStorage/localStorage";
import ProductService from "../product/productService";

// todo: define Cart interface
export interface Cart {
  // ... other cart field
  status: boolean;
  data: any;
  discount: number;
  taxes: number;
  subtotal: number;
}

interface AddProductRequest {
  product_id: number;
  customer_id: number;
}

interface UpdateItemRequest {
  key: string; // Unique key to item in basket
  quantity: number;
}

interface RemoveItemRequest {
  key: string; // Unique key to item in basket
}

// todo: move to another file
const url = "https://fredallard.kinsta.cloud/pos/api/cart-view.php";

const CartService = {
  getCart: async (customer_id: number): Promise<Cart> => {
    const data = new FormData();
    data.append("customer_id", customer_id.toString());

    try {
      const response: AxiosResponse<Cart> = await axios.post(url, data, {
        baseURL: "",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const productIds = Object.values(response.data.data).map(
          (item: any) => {
            const product = {
              id: parseInt(item?.product_id),
              total: item?.line_total,
            };
            return product;
          }
        );

        const products = await ProductService.getProductsCustomer(productIds);

        return {
          ...response.data,
          data: [...products],
        };
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

  addProduct: async ({
    customer_id,
    product_id,
  }: AddProductRequest): Promise<AxiosResponse> => {
    try {
      const addProductUrl =
        "https://fredallard.kinsta.cloud/pos/api/cart-add.php";
      const data = new FormData();
      data.append("customer_id", customer_id.toString());
      data.append("product_id", product_id.toString());

      const response: AxiosResponse = await axios.post(addProductUrl, data, {
        baseURL: "",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status !== 200) {
        console.error(
          "Unexpected response when adding product to cart:",
          response
        );
        throw new Error("Error adding product to cart.");
      }

      return response.data;
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
export default CartService;
