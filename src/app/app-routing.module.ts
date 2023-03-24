import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './components/ajout/ajout.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListeComponent } from './components/liste/liste.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path : 'liste', component : ListeComponent},
  {path : 'detail/:id', component : DetailComponent},
  {path : 'ajout', component : AjoutComponent},
  {path : 'update/:id', component : UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
