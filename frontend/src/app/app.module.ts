import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar o HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarModule } from './navbar/navbar.module'; // Importa o NavbarModule

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent // Declare apenas o FooterComponent aqui
  ],
  imports: [
    BrowserModule,
    NavbarModule, // O NavbarModule já cuida da declaração do NavbarComponent
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
