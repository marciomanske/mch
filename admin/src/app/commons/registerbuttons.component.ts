import {Component, Output, EventEmitter, Input} from '@angular/core';
import { Location } from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-registerbuttons',
  templateUrl: './registerbuttons.component.html',
  styleUrls: ['../customcss/formstyle.css']
})

export class RegisterButtonsComponent  {

  @Output() save = new EventEmitter<any>();
  @Output() saveAndNew = new EventEmitter<any>();
  @Input() validForm: boolean = true;

  constructor (private location: Location) {};

  onCancel() {
    this.location.back();
  }

  onSave() {
    this.save.emit();
  }

  onSaveAndNew() {
    this.saveAndNew.emit();
  }

}
