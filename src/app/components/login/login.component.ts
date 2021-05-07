import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import{ProductService} from 'src/app/services/product.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";

  constructor(private proService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
login(){
  var uname=this.username;
  
  var pswd=this.password;
  let dataSet=this.proService.profileDetails
  console.log(dataSet);
 
  
  
  
 
  if(uname in dataSet){
    var pswd1 = dataSet[uname].password
    console.log(pswd1);
    if(pswd1==pswd){
      alert("login succesful")
      this.router.navigateByUrl("shop")
    }
    else{
      alert("incorrect password")
    }
  }
  else{
    alert("incorrect username")
  }
    
   
  
  
  
}
}
