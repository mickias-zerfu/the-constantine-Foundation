import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  post = {
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
    this.post.featuredImage = file;
  }

  submitPost() {
    // Add your logic here to handle the submission of the post
    console.log(this.post);
    // You can now access the uploaded image file as this.post.featuredImage and perform further processing or upload it to a server.
  }
}
