import { GridColDef } from "@mui/x-data-grid";
import ProductService, { Product } from "../../services/product/productService";
import { createColumn } from "../../utils/utils";

export interface ProductFormated {
  id: string;
  title: string;
  category: string;
  tags: string;
  price: string;
}

export const columns: GridColDef[] = ["title", "category", "tags", "price"].map(
  (field) => createColumn(field)
);

export const getData = async () => {
  const data: Product[] = await ProductService.getProducts({});

  return data;
};

export const formatProducts = (products: Product[]): ProductFormated[] => {
  return products.map((product) => ({
    id: product.product_id,
    title: product.product_name || "",
    category: product.product_category || "",
    tags: product.product_ugs || "",
    price: product.product_price || "",
  }));
};

export const formatProduct = (product: Product): ProductFormated => {
  return {
    id: product.product_id,
    title: product.product_name || "",
    category: product.product_category || "",
    tags: product.product_ugs || "",
    price: product.product_price || "",
  } as ProductFormated;
};
