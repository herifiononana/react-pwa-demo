import ProductService, { Product } from "../../services/product/productService";

export interface ProductFormated {
  id: string;
  title: string;
  image: string;
  category: string;
  tags: string;
  price: string;
}

export const getData = async () => {
  const data: Product[] = await ProductService.getProducts({});

  return data;
};

export const formatProducts = (products: Product[]): ProductFormated[] => {
  return products.map((product) => ({
    id: product.product_id,
    title: product.product_name || "",
    image: product.product_image || "",
    category: product.product_category || "",
    tags: product.product_ugs || "",
    price: product.product_price || "",
  }));
};
