import { API_URL } from "@/shared/api/constants";
import { api } from "@/shared/api/instance";

interface PostDiscountProductParams {
  article: string;
  body: {
    discount: string;
  };
}

type PostDiscountProductConfig = AxiosRequestConfig<PostDiscountProductParams>;

export const postDiscountProduct = async ({ params, config }: PostDiscountProductConfig) => {
  return api.post<any>(`${API_URL.DISCOUNT}/${params.article}`, params.body, config);
};
