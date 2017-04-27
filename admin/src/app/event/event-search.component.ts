import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {BaseSerchComponent} from "../basecomponent/base-search-component";
import {Event} from "../dto/Event";
import {EventService} from "../services/event/event.service";
import {ConfigService} from "../config/config.service";


@Component({
  styleUrls: ['../customcss/formstyle.css'],
  templateUrl: './event-search.component.html'
})
export class EventSearchComponent extends BaseSerchComponent  {

  event: Event;

  constructor(private router: Router, private config: ConfigService, private eventService: EventService) { 
    super();
  }

  onSearch() {
        this.searchErrorMessage = null;
        this.showNoResultsFound = false;
        this.eventService.search(null).then(
            res => {
                if (res.status === 1) {
                    this.searchResult = res.result;
                    this.showNoResultsFound = this.searchResult.length === 0;
                } else {
                    this.searchErrorMessage = "Error executing search";
                }
            });
    }

    onNewRegister() {
        this.router.navigate(['/admin/eventform/0']);
    }

    onEdit(id: string) {
        this.router.navigate(['/admin/eventform/'+id]);
    }

}
