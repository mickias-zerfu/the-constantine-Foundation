import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  event = {
    title: '',
    featuredImage: ' ',
    category: '',
    subCategories: [],
    content: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  handleImageUpload(event: any) {
    const file = event.target.files[0];
    this.event.featuredImage = file;
  }

  submitevent() {
    // Add your logic here to handle the submission of the event
    console.log(this.event);
    // You can now access the uploaded image file as this.event.featuredImage and perform further processing or upload it to a server.
  }
}
