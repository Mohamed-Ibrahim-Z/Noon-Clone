import { Routes } from '@angular/router';
import { UpdateComponent } from './Components/Admin/update/update.component';
import { MainlistComponent } from './Components/Admin/mainlist/mainlist.component';
import { CardListComponent } from './Components/Shared/card-list/card-list.component';

export const routes: Routes = [
  { path: '', component: CardListComponent, pathMatch: 'full' },
  { path: 'productupd/:id', component: UpdateComponent },
  { path: 'main', component: MainlistComponent },
];
