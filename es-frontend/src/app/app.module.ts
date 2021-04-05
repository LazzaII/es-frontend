import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiRestService } from './api-rest.service';
import { TableStructureComponent } from './table-structure/table-structure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertFormComponent } from './insert-form/insert-form.component';
//import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    TableStructureComponent,
    InsertFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //MatTableModule
  ],
  providers: [
    ApiRestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
