import { Component, OnInit } from '@angular/core';
import { eventsInfo } from 'src/app/data/events';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventListObject: EventModel[];
  constructor() { }

  ngOnInit(): void {
    this.eventListObject = eventsInfo;
  }
  evenBackground(index: any) {
    return ((Math.floor(index / 2) + index % 2) % 2 === 0) ? true : false;
  }
  oddBackground(index: any) {
    return ((Math.floor(index / 2) + index % 2) % 2 === 1) ? true : false;
  }

}
