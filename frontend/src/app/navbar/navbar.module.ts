// src/app/navbar/navbar.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent],  // Declare o NavbarComponent aqui
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [NavbarComponent]  // Exporte o NavbarComponent para uso em outros módulos
})
export class NavbarModule { }
