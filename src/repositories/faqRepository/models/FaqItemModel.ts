import { FaqItem } from "../faq.types";

export class FaqItemModel {
  private _dto: FaqItem;

  constructor(dto: FaqItem) {
    this._dto = dto;
  }

  get id() {
    return this._dto.id;
  }

  get categoryName() {
    return this._dto.categoryName;
  }

  get subCategoryName() {
    return this._dto.subCategoryName;
  }

  get question() {
    return this._dto.question;
  }

  get answer() {
    return this._dto.answer;
  }
}
