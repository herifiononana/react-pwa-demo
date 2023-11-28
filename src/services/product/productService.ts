import { AxiosResponse } from "axios";
import axios from "../../config/axiosConfig";

export interface Product {
  product_id: string;
  product_name?: string;
  product_type?: string;
  product_category?: string;
  product_ugs?: string;
  product_price?: string;
  product_stock?: number;
  product_image?: string;
}

const URL = "/products/v0/all";

const ProductService = {
  getProducts: async ({
    id,
    page,
    perPage,
  }: {
    id?: number;
    page?: number;
    perPage?: number;
  }): Promise<Product[]> => {
    let url = URL;
    if (id) url += `/${id}`;
    else if (page && perPage) url += `?page=${page}&per_page=${perPage}`;

    try {
      const response: AxiosResponse<Product[]> = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error("Error when retrieving products:", error);
      throw error;
    }
  },
  //  todo: add other method (CRUD)
};

export default ProductService;
