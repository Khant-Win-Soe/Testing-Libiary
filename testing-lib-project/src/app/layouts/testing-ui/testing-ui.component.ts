import { Component } from '@angular/core';

@Component({
  selector: 'app-testing-ui',
  standalone: false,

  templateUrl: './testing-ui.component.html',
  styleUrl: './testing-ui.component.scss',
})
export class TestingUiComponent {
  showAlert = false;
  onClick() {
    this.showAlert = true;
  }
}
