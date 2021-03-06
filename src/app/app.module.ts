import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RequesterComponent } from "./requester/requester.component";
import { FormComponent } from "./form/form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { ApproverComponent } from "./approver/approver.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule, MatNativeDateModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Daterangepicker, DaterangepickerConfig } from "ng2-daterangepicker";
import { SatDatepickerModule, SatNativeDateModule } from "saturn-datepicker";
import { OpenIdService } from "./service/openId.service";
import { CookieService } from "ngx-cookie-service";
import { NavigateComponent } from "./navigate/navigate.component";
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    RequesterComponent,
    FormComponent,
    ApproverComponent,
    NavigateComponent,
    SpinnerComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatButtonModule,
    Daterangepicker,
    SatDatepickerModule,
    SatNativeDateModule,
    HttpClientModule
  ],
  providers: [OpenIdService, DaterangepickerConfig, CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
