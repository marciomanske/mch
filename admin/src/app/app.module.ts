import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

import {ConfigService} from './config/config.service';
import {LoginService} from './services/login/login.service';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from "./services/authguard/auth-guard.service";
import { ShowService } from "./services/show/show.service";
import { EventService } from "./services/event/event.service";


import { AdminMenuComponent } from './admin/admin-menu.component';
import { ShowSearchComponent } from './show/show-search.component';
import { SearchButtonsComponent } from './commons/searchbuttons.component';
import { DeleteDialogComponent } from './commons/deletedialog.component';
import {RegisterButtonsComponent} from './commons/registerbuttons.component';
import { ShowFormComponent } from './show/show-form.component';
import { EventSearchComponent } from './event/event-search.component';
import { EventFormComponent } from './event/event-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    AdminComponent,
    AdminMenuComponent,
    ShowSearchComponent,RegisterButtonsComponent,
    SearchButtonsComponent, DeleteDialogComponent, ShowFormComponent, EventSearchComponent, EventFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,AppRoutingModule,
    HttpModule
  ],
  providers: [ConfigService, LoginService, AuthGuardService, ShowService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
