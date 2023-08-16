import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projectsInfo } from 'src/app/data/projects';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
  projectInfo:ProjectModel[];
  projectId: number;
  project: any; // Change the type according to your projectModel
  isEditMode: boolean = false;
  updatedContent: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectInfo = this.projectInfo;
    this.route.paramMap.subscribe(params => {
      this.projectId = Number(params.get('id'));
      this.getproject();
    });
  }

  getproject(): void {
    this.project = projectsInfo.find(project => project.id === this.projectId);
    if (this.project) {
      this.updatedContent = this.project.content; // Initialize updatedContent with current content
    } else {
      // Handle the case when project is not found
      // For example, you can navigate to a not-found page or display an error message
    }
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  updateproject(): void {
    if (this.project) {
      this.project.content = this.updatedContent;
      this.isEditMode = false;
    }
  }

  deleteproject(): void {
    if (this.project) {
      if (confirm('Are you sure you want to delete this project?')) {
        const index = projectsInfo.findIndex(project => project.id === this.projectId);
        if (index !== -1) {
          projectsInfo.splice(index, 1);
          this.router.navigate(['/projects-management']);
        }
      }
    }
  }
}
