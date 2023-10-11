import { ServiceService } from './../Services/Service/service.service';
import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators,} from '@angular/forms'
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup

    constructor(private fb:FormBuilder,
       private sevice:ServiceService, 
      private tostar:ToastrService,
      private router:Router,
      private spinner:NgxSpinnerService
       ){

    }
  ngOnInit(){
    this.createform()
  }
  createform(){
this.loginForm = this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.maxLength(20),Validators.minLength(3)]]

})
  }

  login(){
this.spinner.show()
    this.sevice.login(this.loginForm.value).subscribe(res =>{
      this.tostar.success("success","success Login")
      this.router.navigate(['/product'])
      this.spinner.hide();
    },
    error => {
this.tostar.error(error.error)
this.spinner.hide();

    }
    )
  }
}
