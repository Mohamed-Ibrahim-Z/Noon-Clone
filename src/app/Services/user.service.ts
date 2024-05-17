import { Injectable, SimpleChange } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  static currentUser: User | null = null;
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    // try to get user from local storage
    const user = localStorage.getItem('user');
    if (user) {
      UserService.currentUser = JSON.parse(user);
      this.userSubject.next(UserService.currentUser);
    }
  }

  addUser(name: string, email: string, password: string): any {
    // check if user already exists, if not add user
    return this.http
      .get('http://localhost:3100/users')
      .subscribe((users: any) => {
        let userExists = false;
        users.forEach((user: User) => {
          if (user.email === email) {
            userExists = true;
          }
        });
        if (!userExists) {
          this.http
            .post('http://localhost:3100/users', {
              name,
              email,
              password,
              isAdmin: false,
            })
            .subscribe((user: any) => {
              this.login(user);
            });
        }
      });
  }

  checkUser(email: string, password: string) {
    return this.http
      .get('http://localhost:3100/users')
      .subscribe((users: any) => {
        users.forEach((user: User) => {
          if (user.email === email && user.password === password) {
            this.login(user);
            return;
          }
        });
      });
  }

  logout() {
    UserService.currentUser = null;
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }

  login(user: User) {
    UserService.currentUser = user;
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    if (user.isAdmin) {
      window.location.href = '/main';
    } else {
      window.location.href = '/';
    }
  }
}
