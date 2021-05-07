import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ProductService} from 'src/app/services/product.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name="";
email="";
username="";
password="";
  constructor(private proService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  var result=this.proService.register(this.name,this.email,this.username,this.password);
  if (result){
    this.router.navigateByUrl('login')
  }
  else{
    this.router.navigateByUrl('login')
  }
 
  
}
}
