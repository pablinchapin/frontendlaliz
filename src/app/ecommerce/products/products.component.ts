import { Component, OnInit } from '@angular/core';

import { Subscription } from "rxjs/Subscription";
import { EcommerceService } from "../services/ecommerce-service.service";
import { Product } from "../models/product.model";
import { ProductOrder } from "../models/product-order.model";
import { ProductOrders } from "../models/product-orders.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];
  productOrders : ProductOrder[] = [];
  selectedProductOrder : ProductOrder;

  private shoppingCartOrders : ProductOrders;
  sub : Subscription;
  productSelected : boolean = false;


  constructor(
    private ecommerceService : EcommerceService
  ) { }

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }


  addToCart(order : ProductOrder){
    this.ecommerceService.SelectedProductOrder = order;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.productSelected = true;
  }


  removeFromCart(productOrder: ProductOrder){
    let index = this.getProductIndex(productOrder.product);

    if(index > -1){
      this.shoppingCartOrders.productOrders.splice( this.getProductIndex(productOrder.product), 1);
    }

    this.ecommerceService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    this.productSelected = false;
  }


  getProductIndex(product : Product) : number{
    return this.ecommerceService.ProductOrders.productOrders.findIndex(value => value.product === product);
  }


  isProductSelected(product : Product) : boolean {
    return this.getProductIndex(product) > -1;
  }

  loadProducts(){
    this.ecommerceService.getAllProducts()
      .subscribe(
        (products : any[]) => {
          this.products = products;
          this.products.forEach(product => {
            this.productOrders.push(new ProductOrder(product, 0));
          })
        },
        (error) => console.error(error)
      );
  }

  loadOrders(){
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    });
  }

  reset(){
    this.productOrders = [];
    this.ecommerceService.ProductOrders.productOrders = [];
    this.productSelected = false;

    this.loadProducts();
    this.loadOrders();
  }

}
