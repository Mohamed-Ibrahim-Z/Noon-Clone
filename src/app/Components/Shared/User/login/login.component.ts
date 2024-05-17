import { Component, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { User } from '../../../../Models/User';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../Services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';
import { routes } from '../../../../app.routes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  error: any;
  loginForm: any;

  private userSubscription: Subscription;

  constructor(private userServices: UserService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.userSubscription = this.userServices.user$.subscribe((user) => {
      if (
        this.loginForm.controls.email.value === '' ||
        this.loginForm.controls.password.value === ''
      )
        return;
      if (user === null && this.loginForm.control) {
        this.error = 'Invalid email or password';
        return;
      }
      if (user.isAdmin) this.router.navigate(['/main']);
      else this.router.navigate(['/']);
    });
  }
  ngOnInit() {}
  login() {
    if (this.loginForm.invalid) {
      this.error = '';
      for (const i in this.loginForm.controls) {
        this.loginForm.controls[i].markAsTouched();
        if (this.loginForm.controls[i].invalid) {
          this.error += 'Please type a valid ' + i + '\n';
        }
      }

      return;
    }
    this.error = '';
    this.userServices.checkUser(
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value
    );
    setTimeout(() => {
      if (!UserService.currentUser) {
        this.error = 'Invalid email or password';
      }
    }, 1000);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
