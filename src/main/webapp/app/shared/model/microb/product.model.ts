import { Size } from 'app/shared/model/enumerations/size.model';

export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  productSize?: Size;
  imageContentType?: string;
  image?: any;
  productCategoryName?: string;
  productCategoryId?: number;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public price?: number,
    public productSize?: Size,
    public imageContentType?: string,
    public image?: any,
    public productCategoryName?: string,
    public productCategoryId?: number
  ) {}
}
