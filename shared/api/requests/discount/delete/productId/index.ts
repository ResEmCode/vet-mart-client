import { API_URL } from "@/shared/api/constants";
import { api } from "@/shared/api/instance";

interface DeleteDiscountProductParams {
  id: string;
}

type DeleteDiscountProductConfig = AxiosRequestConfig<DeleteDiscountProductParams>;

export const deleteDiscountProduct = async ({ params, config }: DeleteDiscountProductConfig) => {
  return api.delete<any>(`${API_URL.DISCOUNT}/delete/${params.id}`, config);
};
