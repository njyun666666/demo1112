import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AaaComponent } from './aaa/aaa.component';
import { BbbComponent } from './bbb/bbb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from './directives/input.directive';
import { TextColorDirective } from './directives/text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    AaaComponent,
    BbbComponent,
    InputDirective,
    TextColorDirective
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
