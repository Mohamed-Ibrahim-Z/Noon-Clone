import { Routes } from '@angular/router';
import { UpdateComponent } from './Components/Admin/update/update.component';
import { AddComponent } from './Components/Admin/add/add.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { CategoryListAdminComponent } from './Components/Admin/category-list-admin/category-list-admin.component';
import { LoginComponent } from './Components/Shared/User/login/login.component';
import { RegisterComponent } from './Components/Shared/User/register/register.component';
import { CardListComponent } from './Components/Shared/card-list/card-list.component';

export const routes: Routes = [
  { path: '', component: CategoryListComponent, pathMatch: 'full' },
  {
    path: 'category/:category',
    component: CardListComponent,
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productupd/:category/:id', component: UpdateComponent },
  { path: 'main', component: CategoryListAdminComponent },
  { path: 'add', component: AddComponent },
  { path: '**', redirectTo: '' },
];
