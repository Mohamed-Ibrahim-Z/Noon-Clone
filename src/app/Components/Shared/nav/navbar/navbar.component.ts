import { Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnDestroy {
  constructor(private route: Router) {
    console.log('Navbar Component Initialized');
  }
  ngOnDestroy(): void {
    console.log('Navbar Component Destroyed');
  }
  routingPage(dist: string) {
    console.log(dist);
    this.route.navigate(['/category/' + dist]);
  }
}
