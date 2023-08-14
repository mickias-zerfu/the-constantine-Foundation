
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postsInfo } from 'src/app/data/posts';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {
  postInfo:BlogModel[];
  blogId: number;
  blog: any; // Change the type according to your BlogModel
  isEditMode: boolean = false;
  updatedContent: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postInfo = this.postInfo;
    this.route.paramMap.subscribe(params => {
      this.blogId = Number(params.get('id'));
      this.getBlog();
    });
  }

  getBlog(): void {
    this.blog = postsInfo.find(blog => blog.id === this.blogId);
    if (this.blog) {
      this.updatedContent = this.blog.content; // Initialize updatedContent with current content
    } else {
      // Handle the case when blog is not found
      // For example, you can navigate to a not-found page or display an error message
    }
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  updateBlog(): void {
    if (this.blog) {
      this.blog.content = this.updatedContent;
      this.isEditMode = false;
    }
  }

  deleteBlog(): void {
    if (this.blog) {
      if (confirm('Are you sure you want to delete this blog?')) {
        const index = postsInfo.findIndex(blog => blog.id === this.blogId);
        if (index !== -1) {
          postsInfo.splice(index, 1);
          this.router.navigate(['/blogs-management']);
        }
      }
    }
  }
}

/*
  blogId: number;
  blog: BlogModel;
  isEditMode: boolean = false;
  updatedContent: string;

  constructor(
    private route: ActivatedRoute,private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.blogId = Number(params.get('id'));
      this.getBlog();
    });
  }

  getBlog(): void {
    this.blogService.getBlog(this.blogId).subscribe((blog: any) => {
      this.blog = blog;
      this.updatedContent = this.blog.content; // Initialize updatedContent with current content
    });
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  updateBlog(): void {
    this.blogService.updateBlogContent(this.blogId, this.updatedContent).subscribe((updatedBlog: any) => {
      this.blog = updatedBlog;
      this.isEditMode = false;
    });
  }

  deleteBlog(): void {
    if (confirm('Are you sure you want to delete this blog?')) {
      this.blogService.deleteBlog(this.blogId).subscribe(() => {
        this.router.navigate(['/blogs']);
      });
    }
  }
}

*/
