import { AxiosResponse } from "axios";
import axios from "../../config/axiosConfig";

export interface Customer {
  id: number;
  date_created?: string;
  date_created_gmt?: string;
  date_modified?: string;
  date_modified_gmt?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  username?: string;
  avatar_url?: string;
  billing?: {
    address_1?: string;
    address_2?: string;
    city?: string;
    postcode?: string;
    country?: string;
  };
}

const URL = "/customers/v0/all";

const CustomerService = {
  getCustomers: async ({
    id,
    page,
    perPage,
  }: {
    id?: number;
    page?: number;
    perPage?: number;
  }): Promise<Customer[]> => {
    let url = URL;
    if (id) url += `/${id}`;
    else if (page && perPage) url += `?page=${page}&per_page=${perPage}`;

    try {
      const response: AxiosResponse<Customer[]> = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error("Error when retrieving customerss:", error);
      throw error;
    }
  },
  //  todo: add other method (CRUD)
};

export default CustomerService;
