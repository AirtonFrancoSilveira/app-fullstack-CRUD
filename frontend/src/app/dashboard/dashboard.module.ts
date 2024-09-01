import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemCreateComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { 
  constructor(library: FaIconLibrary) {
    // Adicione os ícones que você deseja usar
    library.addIcons(faEdit, faTrash);
  }
}
