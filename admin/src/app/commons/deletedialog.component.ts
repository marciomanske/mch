import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html'
})
export class DeleteDialogComponent  {

  @Output() confirmDelete = new EventEmitter<any>();

  onConfirmDelete() {
    this.confirmDelete.emit();
  }
}
