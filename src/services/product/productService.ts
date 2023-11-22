import { AxiosResponse } from "axios";
import axios from "../../config/axiosConfig";

interface Product {
  id: number;
  name: string;
  // todo: add other properties if necessary
}

const URL = "/products";

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
