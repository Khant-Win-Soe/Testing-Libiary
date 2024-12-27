import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonColorStyles, ButtonRadiusStyles } from 'my-library';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  protected buttonColor = ButtonColorStyles;
  protected buttonRadius = ButtonRadiusStyles;

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^09\d{9}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(10),
    ]),
  });

  showValidate: boolean = false;
  isLoading: boolean = false;

  options: AnimationOptions = {
    path: '../../../assets/json/animations/Animation - Hand Loading.json',
  };

  ngOnInit(): void {
    this.loginForm.patchValue({
      name: '',
      email: 'john.doe@example.com',
      password: '',
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
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        alert('Login Success');
      }, 1000);
      // console.log(this.loginForm);
    }
  }
}
