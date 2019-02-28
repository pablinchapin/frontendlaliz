import { Component } from '@angular/core';
import { EcommerceService } from "./ecommerce/services/ecommerce-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EcommerceService]

})
export class AppComponent {
  //title = 'app';
}
