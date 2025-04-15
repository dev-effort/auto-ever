import {
  FaqListFilter,
  FaqListResponse,
} from "../repositories/faqRepository/faq.types";
import { useQuery } from "@tanstack/react-query";
import { FaqListResponseModel } from "../repositories/faqRepository/models/FaqListResponseModel";
import { useRepository } from "../repositories/RepositoryContext";
import { UseQueryOptionsType } from "./type";
import { useCallback } from "react";

export const faqQueryKey = {
  all: ["faq"] as const,
  lists: () => [...faqQueryKey.all, "list"] as const,
  list: (queries: FaqListFilter) => [...faqQueryKey.lists(), queries] as const,
};

export const useGetFaqList = (
  queries: FaqListFilter,
  options?: UseQueryOptionsType<FaqListResponse, FaqListResponseModel>
) => {
  const { faqRepo } = useRepository();

  return useQuery({
    queryKey: faqQueryKey.list(queries),
    queryFn: async () => {
      const response = await faqRepo.getFaqList(queries);
      return response.data;
    },
    select: useCallback(
      (data: FaqListResponse) => new FaqListResponseModel(data),
      []
    ),
    ...options,
  });
};
