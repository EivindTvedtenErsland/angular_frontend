import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
 
const routes: Routes = [
  { 
    path: '', redirectTo: '/dashboard', pathMatch: 'full' 
  },
  {
    path: 'heroes', component: HeroesComponent
  },
  {
    path: 'items', component: ItemsComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'heroes/detail/:id', component: HeroDetailComponent 
  },
  {
    path: 'items/addItem', component: HeroDetailComponent 
  },
  {
    path: 'items/detail/:id', component: ItemDetailsComponent 
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
