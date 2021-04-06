import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiRestService } from "./api-rest.service";
import { TableStructureComponent } from './table-structure/table-structure.component';
import { InsertFormComponent } from './insert-form/insert-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableStructureComponent,
    InsertFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiRestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
