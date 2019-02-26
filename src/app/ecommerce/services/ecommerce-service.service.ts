import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { HttpClient } from "@angular/common/http";
import { ProductOrder } from "../models/product-order.model";
import { ProductOrders } from "../models/product-orders.model";

@Injectable()
export class EcommerceService {

  private productsUrl = "/api/products";
  private ordersUrl = "/api/orders";

  private productOrder : ProductOrder;
  private orders : ProductOrders = new ProductOrders();

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();


  private total : number;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();


  constructor(private http : HttpClient) { }

  getAllProducts(){
    return this.http.get(this.productsUrl);
  }

  saveOrder(order : ProductOrder){
    return this.http.post(this.ordersUrl, order);
  }

  set SelectedProductOrder(value : ProductOrder){
    this.productOrder = value;
    this.productOrderSubject.next();
  }

  get SelectedProductOrder(){
    return this.productOrder;
  }

  set ProductOrders(value : ProductOrders){
    this.orders = value;
    this.ordersSubject.next();
  }

  get ProductOrders(){
    return this.orders;
  }

  set Total(value : number){
    this.total = value;
    this.totalSubject.next();
  }

  get Total(){
    return this.total;
  }

}
