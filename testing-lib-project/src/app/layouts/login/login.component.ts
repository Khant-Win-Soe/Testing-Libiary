import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(10),
    ]),
  });
  showValidate: boolean = false;
  ngOnInit(): void {
    this.loginForm.patchValue({
      name: 'John Doe',
      password: 'john.doe@example.com',
    });
  }
  submit() {
    this.showValidate = true;
    // Object.keys(this.loginForm.controls).forEach((field) => {
    //   // {1}
    //   const control = this.loginForm.get(field); // {2}
    //   control?.markAsTouched({ onlySelf: true }); // {3}
    // });
    if (!this.loginForm.invalid) {
      alert('fail');
    }
    // console.log(this.loginForm);
  }
}
