import { GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";
import ProductService, { Product } from "../../services/product/productService";

export interface ProductFormated {
  id: string;
  title: string;
  category: string;
  tags: string;
  price: string;
}

const createColumn = (field: keyof Product): GridColDef => ({
  field,
  headerName: field.toString(),
  width: 150,
  renderHeader: (params: GridColumnHeaderParams) => params.field.toUpperCase(),
});

export const columns: GridColDef[] = ["title", "category", "tags", "price"].map(
  (field) => createColumn(field as keyof Product)
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
