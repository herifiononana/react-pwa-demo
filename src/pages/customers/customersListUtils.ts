import CustomerService, {
  Customer,
} from "../../services/customer/customerService";

export interface CustomerFormated {
  id: string;
  image: string;
  firstname: string;
  lastname: string;
  email: string;
  billingAdress: string;
  dateCreated: string;
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
    billingAdress: customer?.billing?.address_1 || "",
    dateCreated: customer?.date_created || "",
  }));
};
