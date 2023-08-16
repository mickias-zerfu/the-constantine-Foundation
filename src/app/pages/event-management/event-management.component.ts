import { Component, OnInit } from '@angular/core';
import { eventsInfo } from 'src/app/data/events';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

  eventListObject: EventModel[];
  constructor() { }

  ngOnInit(): void {
    this.eventListObject = eventsInfo;
  }
}
