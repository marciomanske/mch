import { Injectable } from '@angular/core';
import {BaseHttpService} from "../base/base-http.service";
import {  Http }    from '@angular/http';

import {ConfigService} from "../../config/config.service";
import {Event} from "../../dto/Event";

@Injectable()
export class EventService  extends BaseHttpService {

  constructor(protected http: Http, protected config: ConfigService) { 
    super (http, "event", config);
  }

  

}
