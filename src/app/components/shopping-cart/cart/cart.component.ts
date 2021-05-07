import { Component, OnInit } from '@angular/core';

import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any = [];


  cartTotal = 0;



  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: any) => {
      this.addProductToCart(product);
    })

  }

  addProductToCart(product: any) {
    let productexists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qnty++
        productexists = true;
        break;
      }
    }
    if (!productexists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qnty: 1,
        price: product.price
      })
    }


    this.cartTotal = 0;
    this.cartItems.forEach((item: any) => {
      this.cartTotal += item.qnty * item.price
    })
  }
}

