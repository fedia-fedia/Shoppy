import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import {enableProdMode} from '@angular/core';


enableProdMode();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private authService: AuthService) {
  
  }
  
  myForm = new FormGroup({
    email :new FormControl(""),
    password :new FormControl(""),

  })
  onSubmit(){
    this.authService.signup(this.myForm.value).subscribe((data:any)=>{
      console.log(data)
      
    })
    console.log(this.myForm.value)


  }
}
