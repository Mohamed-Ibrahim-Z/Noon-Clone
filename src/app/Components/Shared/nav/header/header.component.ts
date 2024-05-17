import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../../Services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  loggedIn = false;
  firstName = '';
  private userSubscription: Subscription = new Subscription();

  constructor(private userServices: UserService, private router: Router) {}
  ngOnInit() {
    this.userSubscription = this.userServices.user$.subscribe((user) => {
      this.loggedIn = !!user;
      if (this.loggedIn) this.firstName = user.name.split(' ')[0];
    });
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  logout() {
    console.log('Login Out');
    this.userServices.logout();
    window.location.reload();
  }

  routeToLogin() {
    this.router.navigate(['/login']);
  }
}
