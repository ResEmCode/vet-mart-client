import { API_URL } from "@/shared/api/constants";
import { api } from "@/shared/api/instance";

interface PatchDiscountProductParams {
  id: string;
  body: {
    discount: string;
  };
}

type PatchDiscountProductConfig = AxiosRequestConfig<PatchDiscountProductParams>;

export const patchDiscountProduct = async ({ params, config }: PatchDiscountProductConfig) => {
  return api.patch<any>(`${API_URL.DISCOUNT}/update/${params.id}`, params.body, config);
};
