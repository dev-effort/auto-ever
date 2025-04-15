import { AxiosResponse } from "axios";
import { FaqListFilters, FaqListResponse } from "./faq.types";

export interface IFaqRepository {
  getFaqList(queries?: FaqListFilters): Promise<AxiosResponse<FaqListResponse>>;
}
