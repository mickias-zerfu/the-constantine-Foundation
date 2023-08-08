import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { BlogManagementComponent } from './pages/blog-management/blog-management.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';
import { EventManagementComponent } from './pages/event-management/event-management.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogCreateComponent } from './pages/blog-management/blog-create/blog-create.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeContainerComponent },
  { path: "blogs-management", component: BlogManagementComponent },
  { path: "create-blog", component: BlogCreateComponent },
  { path: "blogs", component: BlogManagementComponent },
  { path: "view:id", component: BlogManagementComponent },
  { path: "projects", component: ProjectManagementComponent },
  { path: "events", component: EventManagementComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
