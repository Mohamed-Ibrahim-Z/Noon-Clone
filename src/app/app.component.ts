import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './Components/Shared/card/card.component';
import { CardListComponent } from './Components/Shared/card-list/card-list.component';
import { AboutUsComponent } from './Layouts/About-us/about-us.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    CardListComponent,
    AboutUsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Noon';
}
