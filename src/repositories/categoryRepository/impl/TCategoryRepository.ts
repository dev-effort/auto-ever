import { AxiosResponse } from "axios";
import { TBaseRepository } from "../../TBaseRepository";
import { Category, CategoryFilters } from "../category.types";
import { ICategoryRepository } from "../ICategoryRepository";
import { mockConsultCategories, mockUsageCategories } from "../mockData";

class TCategoryRepository
  extends TBaseRepository
  implements ICategoryRepository
{
  async getCategories(
    queries?: CategoryFilters
  ): Promise<AxiosResponse<Category[]>> {
    const url = "/mock-api/categories";

    const tabFilteredMockCategories =
      queries?.tab === "CONSULT" ? mockConsultCategories : mockUsageCategories;

    this.mockAdapter.onGet(url).reply(200, tabFilteredMockCategories);
    const response = await this.axios.get<Category[]>(url);

    return response;
  }
}

export const tCategoryRepo = new TCategoryRepository();
