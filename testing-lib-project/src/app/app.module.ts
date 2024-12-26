import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { MyLibModule } from 'my-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    MyLibModule,
    AppRoutingModule,
    LottieComponent,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
