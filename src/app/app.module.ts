import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponsFormComponent } from './components/coupons-form/coupons-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from
    '@angular/material/button';
import { MatButtonToggleModule } from
    '@angular/material/button-toggle';
import { MatNativeDateModule } from
    '@angular/material/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    CouponsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatCheckboxModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
