import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { NumberBoxComponent } from './components/number-box/number-box.component';
import { NrcBoxComponent } from './components/nrc-box/nrc-box.component';

@NgModule({
  declarations: [
    MyLibComponent,
    TextBoxComponent,
    NumberBoxComponent,
    NrcBoxComponent
  ],
  imports: [
    CommonModule, BrowserModule
  ],
  exports: [
    MyLibComponent,
    TextBoxComponent,
    NumberBoxComponent,
    NrcBoxComponent
  ]
})
export class MyLibModule { }
