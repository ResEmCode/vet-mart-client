import { ResponseProductsWithVariants } from "@/@types";
import { api } from "../../instance";
import { API_URL } from "../../constants";

interface GetProductsParams {
  query: string;
}

type GetProductsConfig = AxiosRequestConfig<GetProductsParams>;

export const getProducts = async ({ params, config }: GetProductsConfig) =>
  api.get<ResponseProductsWithVariants>(`${API_URL.PRODUCTS}?${params.query}`, config);
