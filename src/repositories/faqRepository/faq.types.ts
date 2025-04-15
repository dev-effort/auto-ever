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
export type FaqCategoryID =
  | "PRODUCT"
  | "COUNSELING"
  | "CONTRACT"
  | "SIGN_UP"
  | "BUSINESS"
  | "ACCIDENT"
  | "RESERVATION"
  | "VEHICLE"
  | "REFUEL"
  | "COUPON";

export type FaqListFilter = {
  tab: FaqTab;
  faqCategoryID?: FaqCategoryID;
  limit: number;
  offset: number;
};
