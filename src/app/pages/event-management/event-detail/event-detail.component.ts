import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { eventsInfo } from 'src/app/data/events';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: EventModel;
  recenteventList: EventModel[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const eventId = +params['id']; // Replace 'id' with the actual parameter name for the event ID
      this.fetcheventDetails(eventId);
      this.fetchRecentevents();
    });
  }

  fetcheventDetails(eventId: number) {
    this.event = eventsInfo.find(event => event.id === eventId) as EventModel;
  }

  fetchRecentevents() {
    this.recenteventList = eventsInfo.slice(1, 4); // Assuming you want to display the second, third, and fourth event as recent events
  }
}
