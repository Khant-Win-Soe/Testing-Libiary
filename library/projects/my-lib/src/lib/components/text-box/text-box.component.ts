import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'lib-text-box',
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.scss',
})
export class TextBoxComponent implements DoCheck {
  //Error Message
  @Input() validateRequiredMessage: string = 'This field can not be empty';
  @Input() validateMinLengthMessage: string =
    'This field does not meet the minimum length';
  @Input() validateMaxLengthMessage: string =
    'This field over the maximum length';
  @Input() validateEmailMessage: string = 'Please enter a valid email address';
  @Input() validatePatternMessage: string =
    'Please follow the required pattern';
  @Input() validateCustomMessage: string = 'Custom validation failed';

  //For Style
  @Input() textBoxParentDiv: string = 'lib_text_box_parent';
  @Input() textBoxLabelStyle: string = 'lib_text_box_label';
  @Input() textBoxInputStyle: string = 'lib_text_box_input';
  @Input() textBoxIconStyle: string = '';
  @Input() textBoxErrorMessageStyle: string = 'lib_text_box_error';

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
      this.control?.markAsTouched({ onlySelf: true });
    }
  }

  @Output() valueChange = new EventEmitter<string>();

  @Input() control: FormControl = new FormControl('', Validators.required);

  onSubmit: boolean | null = null;
  showValidate: boolean = false;

  get value(): string {
    return this.control.value;
  }

  set value(val: string) {
    this.control.setValue(val);
    this.valueChange.emit(val);
  }

  ngDoCheck(): void {
    this.validateShowCondition();
  }

  validateShowCondition() {
    this.showValidate =
      this.onSubmit !== false &&
      !this.isReadOnly &&
      this.control.invalid &&
      this.control.touched;
  }
}
