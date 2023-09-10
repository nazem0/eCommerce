import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/Validators/confirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterForm:FormGroup
  constructor(private FormBuilder:FormBuilder) {
    this.RegisterForm=this.FormBuilder.group({
      FullName:["",[Validators.required]],
      Email:["",[Validators.required,Validators.email]],
      Username:["",[Validators.required,Validators.pattern(/^\S*$/)]],
      Password:["",[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm)]],
      ConfirmPassword:["",[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm)]]
    })
  }

  register()
  {
    console.log(Object.values(this.RegisterForm.controls))
  }
}
