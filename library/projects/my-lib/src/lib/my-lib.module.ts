import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { NrcBoxComponent } from './components/nrc-box/nrc-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownBoxComponent } from './components/dropdown-box/dropdown-box.component';
import { RadioBoxComponent } from './components/radio-box/radio-box.component';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';

@NgModule({
  declarations: [
    MyLibComponent,
    InputBoxComponent,
    NrcBoxComponent,
    DropdownBoxComponent,
    RadioBoxComponent,
    AlertBoxComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BrowserModule],
  exports: [
    MyLibComponent,
    InputBoxComponent,
    NrcBoxComponent,
    DropdownBoxComponent,
    RadioBoxComponent,
  ],
  bootstrap: [NrcBoxComponent],
})
export class MyLibModule {}
