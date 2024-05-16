import { Routes } from '@angular/router';
import { UpdateComponent } from './Components/Admin/update/update.component';
import { MainlistComponent } from './Components/Admin/mainlist/mainlist.component';
import { CardListComponent } from './Components/Shared/card-list/card-list.component';
import { Component } from '@angular/core';
import { AddComponent } from './Components/Admin/add/add.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';

export const routes: Routes = [
  { path: '', component: CategoryListComponent, pathMatch: 'full' },
  { path: 'productupd/:id', component: UpdateComponent },
  { path: 'main', component: MainlistComponent },
  { path: 'add', component: AddComponent },
  { path: '**', redirectTo: '' },
];
