import { ResponseProductCard } from "@/@types";
import { api } from "../../instance";
import { API_URL } from "../../constants";
import { encryptData } from "../../helpers";

interface GetProductsParams {
  query: string;
}

type GetProductsConfig = AxiosRequestConfig<GetProductsParams>;

export const getProducts = async ({ params, config }: GetProductsConfig) => {
  const encryptQuery = encryptData(params.query);
  return api.get<ResponseProductCard[]>(`${API_URL.PRODUCTS}?${encryptQuery}`, config);
};
