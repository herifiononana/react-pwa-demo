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

const URL = "/products/v0";

const ProductService = {
  getProducts: async (id?: number): Promise<Product[]> => {
    let url = URL;
    if (id) url += `/product?id=${id}`;
    else url = `${URL}/all`;
    try {
      const response: AxiosResponse<Product[]> = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error("Error when retrieving products:", error);
      throw error;
    }
  },

  getProductsCustomer: async (products: { id: number; total: number }[]) => {
    try {
      const productsPromise = products.map(async (product) => {
        const response = await ProductService.getProducts(product.id);
        return { product: response[0], total: product.total };
      });

      return await Promise.all(productsPromise);
    } catch (error) {
      console.error("Error when retrieving products in cart:", error);
      throw error;
    }
  },
  //  todo: add other method (CRUD)
};

export default ProductService;
