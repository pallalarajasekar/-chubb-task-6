import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router, private data: DataService) { }
  formGroup: FormGroup;
  ngOnInit(): void {

    this.formGroup = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  createLogin(){
    console.log("enter dashboard");
    window.localStorage.setItem("authtoken", "1234");
    this.router.navigate(["/dashboard/product/productList"]);
  }

}
