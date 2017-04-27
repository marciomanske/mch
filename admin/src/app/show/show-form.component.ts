import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import {Show} from "../dto/Show";
import {Status} from "../dto/Status";
import {ConfigService} from "../config/config.service";
import {ShowService} from "../services/show/show.service";

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class ShowFormComponent implements OnInit {

  registerErrorMessage: string = null;
  private show: Show = new Show();
  showStatusList: Status[] = this.config.showStatusList.filter(status => status.value != "ALL");

  constructor(private router: Router, private config: ConfigService, private route: ActivatedRoute, private showService: ShowService) {
       
  }

  ngOnInit() {
    this.show = new Show();
    let showName = this.route.snapshot.params['name'];
    let year = this.route.snapshot.params['year'];

    if (showName != "0" && year != "0") {
          this.showService.searchByNameAndYear(showName, year).then(
            res => {
                if (res.status === 1) {
                   this.show = res.result;
                } else {
                   
                }
            });
    }

  }

  onSave(moveBack: boolean, form: any) {

        let fcn = "new";
        if (this.show.id !== null) {
            fcn = "update";
        }
        this.showService[fcn](this.show).then(
            res => {
                if (res.status === 1) {
                    form.reset();
                    this.show = new Show();
                    if (moveBack) {
                        this.router.navigate(['/admin/showsearch']);
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
