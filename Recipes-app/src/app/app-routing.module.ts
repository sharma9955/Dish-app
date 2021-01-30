import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDishesComponent } from './add-dishes/add-dishes.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'adddishes',
    component: AddDishesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
