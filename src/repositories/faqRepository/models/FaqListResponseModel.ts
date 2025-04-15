import { FaqListResponse } from "../faq.types";
import { FaqItemModel } from "./FaqItemModel";

export class FaqListResponseModel {
  private _dto: FaqListResponse;
  private _items: FaqItemModel[];

  constructor(dto: FaqListResponse) {
    this._dto = dto;
    this._items = dto.items
      ? dto.items.map((item) => new FaqItemModel(item))
      : [];
  }

  get dto() {
    return this._dto;
  }

  get items() {
    return this._items;
  }

  get pageInfo() {
    return this._dto.pageInfo;
  }
}
