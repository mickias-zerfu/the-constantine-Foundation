import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  project = {
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
    this.project.featuredImage = file;
  }

  submitproject() {
    // Add your logic here to handle the submission of the project
    console.log(this.project);
    // You can now access the uploaded image file as this.project.featuredImage and perform further processing or upload it to a server.
  }
}
