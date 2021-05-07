import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productArray: any[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is production 1 description',
      price: 100,
      qnty: 1,
      imageUrl: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/input_devices/dell/mouse/wm126/dell-mouse-wm126-504x350.jpg?fmt=jpg"
    },

    {
      id: 2,
      name: 'Product 2',
      description: 'This is production 2 description',
      price: 150,
      qnty: 1,
      imageUrl: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/input_devices/dell/mouse/wm126/dell-mouse-wm126-504x350.jpg?fmt=jpg"
    },


    {
      id: 3,
      name: 'Product 3',
      description: 'This is production 3 description',
      price: 100,
      qnty: 1,
      imageUrl: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/input_devices/dell/mouse/wm126/dell-mouse-wm126-504x350.jpg?fmt=jpg"
    },

    {
      id: 4,
      name: 'Product 4',
      description: 'This is production 4 description',
      price: 110,
      qnty: 1,
      imageUrl: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/input_devices/dell/mouse/wm126/dell-mouse-wm126-504x350.jpg?fmt=jpg"
    }
  ];
  profileDetails: any = {
    'harsha4': {
      name: 'harsha',
      email: 'harsha4@gmail.com',
      username: 'harsha4',
      password: '1234'
    },
    'ebin4': {
      name: 'ebin',
      email: 'ebin4@gmail.com',
      username: 'ebin4',
      password: '12345'
    },
    'joann4': {
      name: 'joann',
      email: 'joann4@gmail.com',
      username: 'joann4',
      password: '12346'
    },

  }


  constructor() { }
  getProducts() {
    return this.productArray
  }

  register(name: any, email: any, username: any, password: any) {
    if (username in this.profileDetails) {
      alert("user exists")
      return false;
    }
    else{
      this.profileDetails[username] = {
        name,
        email,
        username,
        password
      }
      alert("Registration succesful")
      console.log(this.profileDetails);
      return true;
    }
    
  }
}
