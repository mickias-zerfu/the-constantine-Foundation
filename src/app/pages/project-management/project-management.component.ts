import { Component, OnInit } from '@angular/core';
import { projectsInfo } from 'src/app/data/projects';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {


 projectListObject:ProjectModel[];
  constructor() { }

  ngOnInit(): void {
    this.projectListObject =projectsInfo;
  }
}
