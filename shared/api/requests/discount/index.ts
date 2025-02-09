import { api } from "../../instance";
import { API_URL } from "../../constants";

type GetDiscountProductsConfig = AxiosRequestConfig;

export const getDiscountProducts = async ({ config }: GetDiscountProductsConfig) => {
  return api.get<any>(API_URL.DISCOUNT, config);
};
