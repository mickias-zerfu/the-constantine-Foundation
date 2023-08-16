import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projectsInfo } from 'src/app/data/projects';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: ProjectModel;
  recentprojectList: ProjectModel[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = +params['id']; // Replace 'id' with the actual parameter name for the project ID
      this.fetchprojectDetails(projectId);
      this.fetchRecentprojects();
    });
  }

  fetchprojectDetails(projectId: number) {
    this.project = projectsInfo.find(project => project.id === projectId) as ProjectModel;
  }

  fetchRecentprojects() {
    this.recentprojectList = projectsInfo.slice(1, 4); // Assuming you want to display the second, third, and fourth project as recent projects
  }
}
