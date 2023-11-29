import CustomerService, {
  Customer,
} from "../../services/customer/customerService";

export interface CustomerFormated {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  "billing adress": string;
  "date created": string;
}

export const fetchCustomers = async () => {
  const customers: Customer[] = await CustomerService.getCustomers({});

  return customers;
};

export const formatCustomers = (customers: Customer[]): CustomerFormated[] => {
  return customers.map((customer) => ({
    id: customer?.id.toString(),
    image: customer?.avatar_url || "",
    firstname: customer?.first_name || "",
    lastname: customer?.last_name || "",
    email: customer?.email || "",
    "billing adress": customer?.billing?.address_1 || "",
    "date created": customer?.date_created || "",
  }));
};
