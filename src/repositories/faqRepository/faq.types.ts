import { CategoryID } from "../categoryRepository/category.types";

export type FaqListResponse = {
  items: FaqItem[];
  pageInfo: PageInfo;
};

export type FaqItem = {
  answer: string;
  categoryName: string;
  id: number;
  question: string;
  subCategoryName: string;
};

export type PageInfo = {
  limit: number;
  nextOffset: number;
  offset: number;
  prevOffset: number;
  totalRecord: number;
};

export type FaqTab = "CONSULT" | "USAGE";

export type FaqListFilters = {
  tab: FaqTab;
  faqCategoryID?: CategoryID;
  limit: number;
  offset: number;
  question?: string;
};
