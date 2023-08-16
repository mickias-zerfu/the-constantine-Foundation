import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://api.example.com/projects'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  getProject(id: number): Observable<ProjectModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ProjectModel>(url);
  }

  addProject(project: ProjectModel): Observable<ProjectModel> {
    return this.http.post<ProjectModel>(this.apiUrl, project);
  }

  getAllProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.apiUrl);
  }

  updateProjectDetails(id: number, details: string): Observable<ProjectModel> {
    const url = `${this.apiUrl}/${id}`;
    const updatedProject = { details: details };
    return this.http.put<ProjectModel>(url, updatedProject);
  }

  deleteProject(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
