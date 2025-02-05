import { ResponseProductCard } from "@/@types";
import { api } from "../../instance";
import { API_URL } from "../../constants";

interface GetFiltersParams {
  query: string;
}

type GetFiltersConfig = AxiosRequestConfig<GetFiltersParams>;

export const getFilters = async ({ params, config }: GetFiltersConfig) => api.get<any[]>(`${API_URL.FILTERS}?${params.query}`, config);
