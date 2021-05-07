import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import {MessengerService}from 'src/app/services/messenger.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem:any;

  itemsCart:any=[];

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    // this.itemsCart = JSON.parse(localStorage.getItem('localCart')||'');
    // console.log(this.itemsCart);
    
  }
 

inc(productItem:any) {
  if(productItem.qnty!=5){
    productItem.qnty+=1;
  }
  


}
dec(productItem:any) {
  
  
    productItem.qnty-=1;
  
  }

handleCart(){
  this.msg.sendMsg(this.productItem)
}
}
  


