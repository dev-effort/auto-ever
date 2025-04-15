import { AxiosResponse } from "axios";
import { Category, CategoryFilters } from "./category.types";

export interface ICategoryRepository {
  getCategories(queries?: CategoryFilters): Promise<AxiosResponse<Category[]>>;
}
