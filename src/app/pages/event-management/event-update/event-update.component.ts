import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { eventsInfo } from 'src/app/data/events';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  eventInfo:EventModel[];
  eventId: number;
  event: any; // Change the type according to your eventModel
  isEditMode: boolean = false;
  updatedContent: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventInfo = this.eventInfo;
    this.route.paramMap.subscribe(params => {
      this.eventId = Number(params.get('id'));
      this.getevent();
    });
  }

  getevent(): void {
    this.event = eventsInfo.find(event => event.id === this.eventId);
    if (this.event) {
      this.updatedContent = this.event.content; // Initialize updatedContent with current content
    } else {
      // Handle the case when event is not found
      // For example, you can navigate to a not-found page or display an error message
    }
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  updateevent(): void {
    if (this.event) {
      this.event.content = this.updatedContent;
      this.isEditMode = false;
    }
  }

  deleteevent(): void {
    if (this.event) {
      if (confirm('Are you sure you want to delete this event?')) {
        const index = eventsInfo.findIndex(event => event.id === this.eventId);
        if (index !== -1) {
          eventsInfo.splice(index, 1);
          this.router.navigate(['/events-management']);
        }
      }
    }
  }
}
