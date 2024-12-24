import { Component, EventEmitter, Input, Output } from '@angular/core';

export class DropDownDataModel {}

@Component({
  selector: 'lib-dropdown-box',
  standalone: false,

  templateUrl: './dropdown-box.component.html',
  styleUrl: './dropdown-box.component.scss',
})
export class DropdownBoxComponent {
  @Input() label: string = '';
  @Input() placeholder: string = 'Select an option';
  @Input() isDisabled: boolean = false;
  @Input() value: any = '';
  @Input() valueExp: any = '';
  @Input() displayValue: any = '';
  @Input() dataSource: any[] = [];

  @Output() selectionChange = new EventEmitter<any>();

  selectedItem: string | null = null;
  showDropdownList = false;

  showDropdownLists() {
    this.showDropdownList = true;
  }

  onSelect(item: string): void {
    this.selectedItem = item;
    this.selectionChange.emit(item);
    this.showDropdownList = false;
  }
}
