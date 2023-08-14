import { Component, OnInit } from '@angular/core';
import { postsInfo } from 'src/app/data/posts';
import { BlogModel } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-management',
  templateUrl: './blog-management.component.html',
  styleUrls: ['./blog-management.component.css']
})
export class BlogManagementComponent implements OnInit {

  blogListObject: BlogModel[];
  constructor() { }

  ngOnInit(): void {
    this.blogListObject = postsInfo;
  }

}
