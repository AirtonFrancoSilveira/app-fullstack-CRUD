import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCreateComponent } from './item-create/item-create.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'create', component: ItemCreateComponent },
  { path: 'edit/:id', component: ItemCreateComponent }, // Rota de edição
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
