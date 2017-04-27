import { Injectable } from '@angular/core';

import { Status } from '../dto/Status';

@Injectable()
export class ConfigService {

  constructor() { }

  url = {
    baseAddress: "http://127.0.0.1",
    user: {
      login: "/uaa/oauth/token",
      userData: "/uaa/users/current"
    },
    show: {
      find: "/shows",
      new:"/shows/",
      update: "/shows/"
    },
    event: {
      find: "/events",
      new:"/events/",
      update: "/events/",
      findById: "/events"
    }
  }

  showStatusList = [
    new Status("ALL", "All", "All"),
    new Status("ACTIVE", "Actives", "Actives only"),
    new Status("ARCHIVED", "Archived", "Archived only")
  ];

}
