import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  // empty string means home page
  { path: '', component: HomeComponent },
  //search is a literal text, anything after the colon is the route paramter
  { path: 'search/:searchTerm', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
