import { Component, OnInit } from '@angular/core';
import { postsInfo } from 'src/app/data/posts';
import { BlogModel } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogListObject: BlogModel[];
  constructor() { }

  ngOnInit(): void {
    this.blogListObject = postsInfo;
  }
  evenBackground(index: any) {
    return ((Math.floor(index / 2) + index % 2) % 2 === 0) ? true : false;
  }
  oddBackground(index: any) {
    return ((Math.floor(index / 2) + index % 2) % 2 === 1) ? true : false;
  }

}
