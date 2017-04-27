import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-searchbuttons',
    templateUrl: './searchbuttons.component.html'
})
export class SearchButtonsComponent {

  @Output() search = new EventEmitter<any>();
  @Output() newRegister = new EventEmitter<any>();

  @Input() newRegigerButtonVisible: boolean = true;

  onSearch() {
    this.search.emit();
  }

  onNewRegister() {
    this.newRegister.emit();
  }

}
