import { AxiosResponse } from "axios";
import { FaqListFilter, FaqListResponse } from "./faq.types";

export interface IFaqRepository {
  getFaqList(queries?: FaqListFilter): Promise<AxiosResponse<FaqListResponse>>;
}
