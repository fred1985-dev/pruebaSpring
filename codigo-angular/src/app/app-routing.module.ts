import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Usuario/list/list.component';
import { AddComponent } from './Usuario/add/add.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { DeleteComponent } from './Usuario/delete/delete.component';
import { SearhComponent } from './Usuario/searh/searh.component';





const routes: Routes = [
  {path:'listar', component: ListComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component: EditComponent},
  {path:'delete', component: DeleteComponent},
  {path:'buscar', component: SearhComponent},
  { path: 'buscarUser/:termino', component: SearhComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
