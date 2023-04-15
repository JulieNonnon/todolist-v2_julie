import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateTaskButtonComponent } from './components/create-task-button/create-task-button.component';
import { ModifyTaskButtonComponent } from './components/modify-task-button/modify-task-button.component';
import { ValidateTaskButtonComponent } from './components/validate-task-button/validate-task-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateTaskButtonComponent,
    ModifyTaskButtonComponent,
    ValidateTaskButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
