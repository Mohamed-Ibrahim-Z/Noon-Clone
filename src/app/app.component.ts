import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './Components/Shared/card/card.component';
import { CardListComponent } from './Components/Shared/card-list/card-list.component';
import { AboutUsComponent } from './Layouts/About-us/about-us.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { CategoriesComponent } from './Components/Shared/nav/categories/categories.component';
import { HeaderComponent } from './Components/Shared/nav/header/header.component';
import { NavbarComponent } from './Components/Shared/nav/navbar/navbar.component';
import { MainComponent } from './Components/Admin/main/main.component';
import { UpdateComponent } from './Components/Admin/update/update.component';
import { MainlistComponent } from './Components/Admin/mainlist/mainlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    CardListComponent,
    AboutUsComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    MainlistComponent,
    UpdateComponent,
    CategoriesComponent,
  ],
  providers: [CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Noon';
}
