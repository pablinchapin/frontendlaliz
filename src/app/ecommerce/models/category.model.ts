export class Category {

  id:number;
  name:string;
  pictureUrl:string;
  active:boolean;

  constructor(
    id:number,
    name:string,
    pictureUrl:string,
    active:boolean
  ){
    this.id = id;
    this.name = name;
    this.pictureUrl = pictureUrl;
    this.active = active;
  }

}
