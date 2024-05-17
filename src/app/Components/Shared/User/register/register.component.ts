import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../../Services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  error = '';
  registerForm: any;

  constructor(private UserService: UserService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  register() {
    this.error = '';

    if (this.registerForm.invalid) {
      this.error = '';
      for (const i in this.registerForm.controls) {
        this.registerForm.controls[i].markAsTouched();
        if (i == 'confirmPassword') continue;
        if (this.registerForm.controls[i].invalid) {
          this.error += 'Please type a valid ' + i + '\n';
        }
      }
    }
    if (
      this.registerForm.invalid ||
      this.registerForm.controls.password.value !==
        this.registerForm.controls.confirmPassword.value
    ) {
      if (
        this.registerForm.controls.password.value !==
        this.registerForm.controls.confirmPassword.value
      )
        this.error += 'Passwords do not match';
      return;
    }

    this.error = '';

    this.UserService.addUser(
      this.registerForm.controls.name.value,
      this.registerForm.controls.email.value,
      this.registerForm.controls.password.value
    );

    setTimeout(() => {
      this.error = 'User already exists';
    }, 1000);
  }
}
