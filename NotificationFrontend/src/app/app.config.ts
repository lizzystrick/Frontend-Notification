import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutesModule } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent

  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutesModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppConfig { }

