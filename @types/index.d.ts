import { Product, ProductVariant } from "@prisma/client";

type ResponseProduct = Product;

type ResponseProducts = ResponseProduct[];

type ResponseProductWithVariant = Product & ProductVariant;

type ResponseProductsWithVariants = ResponseProductWithVariant[];
