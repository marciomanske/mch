import { Injectable } from '@angular/core';
import {BaseHttpService} from "../base/base-http.service";
import {  Http }    from '@angular/http';

import {ConfigService} from "../../config/config.service";
import {Show} from "../../dto/Show";

@Injectable()
export class ShowService  extends BaseHttpService {

  constructor(protected http: Http, protected config: ConfigService) { 
    super (http, "show", config);
  }

  searchByNameAndYear(name: string, year: string):Promise<any> {
    let getUrl = this.config.url[this.entityName].find + "/" + name + "/" + year;
    return this.executeGet(getUrl);
  }


 
}
