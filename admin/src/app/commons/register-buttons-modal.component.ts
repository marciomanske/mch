import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-register-buttons-modal',
  templateUrl: './register-buttons-modal.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class RegisterButtonsModalComponent {

  @Output() save = new EventEmitter<any>();
  @Input() validForm: boolean = true;


  constructor() { }

  onSave() {
    this.save.emit();
  }


}
