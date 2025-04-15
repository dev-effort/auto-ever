import { AxiosResponse } from "axios";
import { TBaseRepository } from "../../TBaseRepository";
import { FaqListFilter, FaqListResponse } from "../faq.types";
import { IFaqRepository } from "../IFaqRepository";
import { mockFaqConsultList, mockFaqUsageList } from "../mockData";

class TFaqRepository extends TBaseRepository implements IFaqRepository {
  async getFaqList(
    queries?: FaqListFilter
  ): Promise<AxiosResponse<FaqListResponse>> {
    const url = "/mock-api/faq";

    const tabFilteredMockFaqList =
      queries?.tab === "CONSULT" ? mockFaqConsultList : mockFaqUsageList;

    const categoryFilteredMockFaqList = tabFilteredMockFaqList
      .filter((faq) => {
        switch (queries?.faqCategoryID) {
          case "CONTRACT":
            return faq.subCategoryName === "계약";
          case "PRODUCT":
            return faq.subCategoryName === "서비스 상품";
          case "COUNSELING":
            return faq.subCategoryName === "도입 상담";
          case "SIGN_UP":
            return faq.categoryName === "가입문의";
          case "BUSINESS":
            return faq.categoryName === "비즈니스(업무용)";
          case "ACCIDENT":
            return faq.categoryName === "사고/보험";
          case "RESERVATION":
            return faq.categoryName === "예약/결제";
          case "VEHICLE":
            return faq.categoryName === "차량문의";
          case "REFUEL":
            return faq.categoryName === "충전";
          case "COUPON":
            return faq.categoryName === "쿠폰/기타";
          default:
            return true;
        }
      })
      .slice(
        queries?.offset || 0,
        queries?.offset || 0 + (queries?.limit || 10)
      );

    this.mockAdapter.onGet(url).reply(200, {
      items: categoryFilteredMockFaqList,
      pageInfo: {
        limit: queries?.limit || 10,
        offset: queries?.offset || 0,
        nextOffset: queries?.offset || 0 + (queries?.limit || 10),
        prevOffset: queries?.offset || 0 - (queries?.limit || 10),
        totalRecord: tabFilteredMockFaqList.length,
      },
    });
    const response = await this.axios.get<FaqListResponse>(url);

    return response;
  }
}

export const tFaqRepo = new TFaqRepository();
