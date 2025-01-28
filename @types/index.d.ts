import { Product, ProductVariant } from "@prisma/client";

type ResponseProduct = Product;

type ResponseProducts = ResponseProduct[];

// type ResponseProductWithVariant = Product & ProductVariant;

// type ResponseProductsWithVariants = ResponseProductWithVariant[];

interface ResponseProductPage extends ResponseProduct{
    variants: ProductVariant[]
}

interface ResponseProductCard {
  article: number;
  available: boolean;
  count: number;
  createdAt: string;
  currency: string;
  id: number;
  image: string;
  name: string;
  price: number;
  productId: number;
  unit: string;
  updatedAt: string;
}
