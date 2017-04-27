import {Show} from "./Show";

export class Event {

    constructor (public id: string = null, 
                 public internalTitle: string = null,
                 public externalTitle: string = null,
                 public description: string = null,
                 public show: Show = null
    ) {

    }

}