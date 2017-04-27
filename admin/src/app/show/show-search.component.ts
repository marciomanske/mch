import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {BaseSerchComponent} from "../basecomponent/base-search-component";
import {Status} from "../dto/Status";
import {Show} from "../dto/Show";
import {ConfigService} from "../config/config.service";
import {ShowService} from "../services/show/show.service";


@Component({
  templateUrl: './show-search.component.html',
  styleUrls: ['../customcss/formstyle.css']
})
export class ShowSearchComponent extends BaseSerchComponent implements OnInit {

    showStatusList: Status[] = this.config.showStatusList;
    show = new Show();

    constructor(private router: Router, private config: ConfigService, private showService: ShowService) {
        super();
    }

    ngOnInit() {
       
    }

    onNewRegister() {
        this.router.navigate(['/admin/showform/0/0']);
    }

    onEdit(name: string, year: string) {
        this.router.navigate(['/admin/showform/'+name+'/'+year]);
    }

    onSearch() {
        this.searchErrorMessage = null;
        this.showNoResultsFound = false;
        this.showService.search(null).then(
            res => {
                if (res.status === 1) {
                    this.searchResult = res.result;
                    this.showNoResultsFound = this.searchResult.length === 0;
                } else {
                    this.searchErrorMessage = "Error executing search";
                }
            });
    }

}
