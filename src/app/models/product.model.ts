export class Product{
    public id:number;
    public name: string;
public description: string;
public price: number;
public imageUrl: string;
  // static id: number;
  // qty!: number;

constructor(id:number=0,name:string="",description:string="",price:number=0,
imageUrl:string="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/input_devices/dell/mouse/wm126/dell-mouse-wm126-504x350.jpg?fmt=jpg"){
this.id=id;
this.name=name;
this.description=description;
this.price=price;
this.imageUrl=imageUrl;
}
}