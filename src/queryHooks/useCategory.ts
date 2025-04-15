import { useQuery } from "@tanstack/react-query";
import { useRepository } from "../repositories/RepositoryContext";
import { UseQueryOptionsType } from "./type";
import { useCallback } from "react";
import {
  Category,
  CategoryFilters,
} from "../repositories/categoryRepository/category.types";
import { CategoryModel } from "../repositories/categoryRepository/models/CategoryModel";

export const categoryQueryKey = {
  all: ["category"] as const,
  lists: () => [...categoryQueryKey.all, "list"] as const,
  list: (queries: CategoryFilters) =>
    [...categoryQueryKey.lists(), queries] as const,
};

export const useGetCategories = (
  queries: CategoryFilters,
  options?: UseQueryOptionsType<Category[], CategoryModel[]>
) => {
  const { categoryRepo } = useRepository();

  return useQuery({
    queryKey: categoryQueryKey.list(queries),
    queryFn: async () => {
      const response = await categoryRepo.getCategories(queries);
      return response.data;
    },
    select: useCallback(
      (data: Category[]) => data.map((category) => new CategoryModel(category)),
      []
    ),
    ...options,
  });
};
