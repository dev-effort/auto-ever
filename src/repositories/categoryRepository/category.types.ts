import { FaqTab } from "../faqRepository/faq.types";

export type CategoryID =
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

export type Category = {
  categoryID: CategoryID;
  name: string;
};

export type CategoryFilters = {
  tab: FaqTab;
};
