import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'lib-text-box',
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.scss',
})
export class TextBoxComponent {
  //Error Message Group
  @Input() validateRequiredMessage: string = '';
  @Input() validateMinLengthMessage: string = '';
  @Input() validateMaxLengthMessage: string = '';
  @Input() validateEmailMessage: string = '';
  @Input() validatePatternMessage: string = '';
  @Input() validateCustomMessage: string = '';

  //For Value
  @Input() label: string = '';
  @Input() placeHolder: string = '';
  @Input() type: string = 'text';

  @Input() isReadOnly: boolean = false;

  @Input() set isDisable(data: boolean) {
    if (data) this.control.disable();
  }

  @Input() set onSubmitted(data: boolean) {
    this.onSubmit = data;
    if (this.onSubmit) {
      this.control?.markAsTouched({ onlySelf: true }); // {3}
    }
  }

  @Output() valueChange = new EventEmitter<string>();

  @Input() control: FormControl = new FormControl('', Validators.required);
  onSubmit: boolean | null = null;

  get value(): string {
    return this.control.value;
  }

  set value(val: string) {
    this.control.setValue(val);
    this.valueChange.emit(val);
  }
}
