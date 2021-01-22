import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { UpdatecomponentComponent } from './updatecomponent/updatecomponent.component';
import { DeletecomponentComponent } from './deletecomponent/deletecomponent.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcomponentComponent,
    UpdatecomponentComponent,
    DeletecomponentComponent,
    MainmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
