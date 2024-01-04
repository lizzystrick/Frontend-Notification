import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';

import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppConfig { }

