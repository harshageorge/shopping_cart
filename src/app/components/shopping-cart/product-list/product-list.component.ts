import { Component, OnInit,Input } from '@angular/core';

import {ProductService} from 'src/app/services/product.service'
import {Product} from 'src/app/models/product.model'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  productList:any;

  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
   this.productList=this.ProductService.getProducts();
  
   
   
  }


  
}



