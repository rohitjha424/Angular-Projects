import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeComponent } from './MyComponents/employee/employee.component';
import { EmployeeItemComponent } from './MyComponents/employee-item/employee-item.component';
import { AddEmployeeComponent } from './MyComponents/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    
    EmployeeComponent,
    EmployeeItemComponent,
    AddEmployeeComponent
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
