import * as yup from "yup";

export interface CustomerToAdd {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  username: string;
  password: string;

  // billing
  firstnameBilling: string;
  lastnameBilling: string;
  emailBilling: string;
  companyBilling: string;
  phoneBilling: string;
  adress1Billing: string;
  adress2Billing: string;
  cityBilling: string;
  postCodeBilling: string;
  stateBilling: string;
  countryBilling: string;

  // shipping
  firstnameShipping: string;
  lastnameShipping: string;
  companyShipping: string;
  adress1Shipping: string;
  adress2Shipping: string;
  cityShipping: string;
  postCodeShipping: string;
  stateShipping: string;
  countryShipping: string;
}

export const CUSTOMER_INPUTS_VALUE = {
  firstname: "firstname",
  lastname: "lastname",
  email: "email",
  role: "role",
  username: "username",
  password: "password",
};

export const BILLING_INPUTS_VALUE = {
  firstnameBilling: "firstname",
  lastnameBilling: "lastname",
  emailBilling: "email",
  companyBilling: "company",
  phoneBilling: "phone",
  adress1Billing: "adress 1",
  adress2Billing: "adress 2",
  cityBilling: "city",
  postCodeBilling: "postcode",
  stateBilling: "state",
  countryBilling: "country",
};

export const SHIPPING_INPUTS_VALUE = {
  firstnameShipping: "firstname",
  lastnameShipping: "lastname",
  companyShipping: "company",
  adress1Shipping: "adress 1",
  adress2Shipping: "adress 2",
  cityShipping: "city",
  postCodeShipping: "postcode",
  stateShipping: "state",
  countryShipping: "country",
};

export const validationSchema = yup.object({
  firstname: yup.string(),
  lastname: yup.string(),
  email: yup.string(),
  role: yup.string(),
  username: yup.string(),
  password: yup.string().trim().required("password required"),

  // Billing adress
  firstnameBilling: yup.string(),
  lastnameBilling: yup.string(),
  emailBilling: yup.string(),
  companyBilling: yup.string(),
  phoneBilling: yup.string(),
  adress1Billing: yup.string(),
  adress2Billing: yup.string(),
  cityBilling: yup.string(),
  postCodeBilling: yup.string(),
  stateBilling: yup.string(),
  countryBilling: yup.string(),

  // Shipping adress
  firstnameShipping: yup.string(),
  lastnameShipping: yup.string(),
  companyShipping: yup.string(),
  adress1Shipping: yup.string(),
  adress2Shipping: yup.string(),
  cityShipping: yup.string(),
  postCodeShipping: yup.string(),
  stateShipping: yup.string(),
  countryShipping: yup.string(),
});

export const initialValues: CustomerToAdd = {
  firstname: "",
  lastname: "",
  email: "",
  role: "",
  username: "",
  password: "",

  // billing
  firstnameBilling: "",
  lastnameBilling: "",
  emailBilling: "",
  companyBilling: "",
  phoneBilling: "",
  adress1Billing: "",
  adress2Billing: "",
  cityBilling: "",
  postCodeBilling: "",
  stateBilling: "",
  countryBilling: "",

  // shipping
  firstnameShipping: "",
  lastnameShipping: "",
  companyShipping: "",
  adress1Shipping: "",
  adress2Shipping: "",
  cityShipping: "",
  postCodeShipping: "",
  stateShipping: "",
  countryShipping: "",
};
