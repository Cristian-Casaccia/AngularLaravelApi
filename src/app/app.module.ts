import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule per ngModel
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HeaderComponent } from './main-components/header/header.component';  // Se usi AuthService, assicurati che sia configurato correttamente



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Assicurati che sia qui
    NgbModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())  // Nuova configurazione per HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
