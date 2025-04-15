import { Category } from "../category.types";

export class CategoryModel {
  private _dto: Category;

  constructor(dto: Category) {
    this._dto = dto;
  }

  get dto() {
    return this._dto;
  }

  get categoryID() {
    return this._dto.categoryID;
  }

  get name() {
    return this._dto.name;
  }
}
