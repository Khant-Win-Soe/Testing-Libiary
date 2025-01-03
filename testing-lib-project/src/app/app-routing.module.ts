import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { TestingUiComponent } from './layouts/testing-ui/testing-ui.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent
  // },
  {
    path: '',
    component: TestingUiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
