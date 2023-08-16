import { Component, OnInit } from '@angular/core';
import { projectsInfo } from 'src/app/data/projects';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectListObject: ProjectModel[];
  constructor() { }

  ngOnInit(): void {
    this.projectListObject = projectsInfo;
  }
  evenBackground(index: any) {
    return ((Math.floor(index / 2) + index % 2) % 2 === 0) ? true : false;
  }
  oddBackground(index: any) {
    return ((Math.floor(index / 2) + index % 2) % 2 === 1) ? true : false;
  }

}
