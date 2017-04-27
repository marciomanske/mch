import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import {Event} from "../dto/Event";
import {Show} from "../dto/Show";
import {ShowService} from "../services/show/show.service";
import {EventService} from "../services/event/event.service";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class EventFormComponent implements OnInit {

  showList = [];
  registerErrorMessage: string = null;

  event: Event = new Event();
  selectedShow: string = null;

  constructor(private router: Router, private route: ActivatedRoute, private showService: ShowService
    , private eventService: EventService) { }

  ngOnInit() {
    this.selectedShow = null;
    this.showService.search(null).then(
            res => {
                if (res.status === 1) {
                    this.showList = res.result;
                } else {
                    this.registerErrorMessage = "Error executing search";
                }
            });

    let eventId = this.route.snapshot.params['id'];
    this.event = new Event();         

    if (eventId != "0") {
          this.eventService.searchById(eventId).then(
            res => {
                if (res.status === 1) {
                   this.event = res.result;
                   this.selectedShow = this.event.show.id;
                } else {
                   this.registerErrorMessage = res.error;
                }
            });   
    }
  }

  onSave(moveBack: boolean, form: any) {
        let shows = this.showList.filter(show => show.id === this.selectedShow);
        this.event.show = shows[0];
        let fcn = "new";
        if (this.event.id !== null) {
            fcn = "update";
        }
        
        this.eventService[fcn](this.event).then(
            res => {
                if (res.status === 1) {
                    form.reset();
                    this.event = new Event();
                    if (moveBack) {
                        this.router.navigate(['/admin/eventsearch']);
                    }

                } else {
                    this.registerErrorMessage = res.message;
                }
            });
    }

    onSaveAndNew(form: any) {
        this.onSave(false, form);
    }

}
