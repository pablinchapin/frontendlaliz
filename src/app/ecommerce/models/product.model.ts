export class Product {

  id:number;
  name:string;
  description:string;
  price:number;
  pictureUrl:string;
  categoryId:number;


  constructor(
    id:number,
    name:string,
    description:string,
    price:number,
    pictureUrl:string,
    categoryId:number
  ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.pictureUrl = pictureUrl;
    this.categoryId = categoryId;
  }


}
