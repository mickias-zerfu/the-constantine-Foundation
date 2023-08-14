import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { BlogManagementComponent } from './pages/blog-management/blog-management.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';
import { EventManagementComponent } from './pages/event-management/event-management.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogCreateComponent } from './pages/blog-management/blog-create/blog-create.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BlogListComponent } from './pages/blog-management/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-management/blog-detail/blog-detail.component';
import { BlogUpdateComponent } from './pages/blog-management/blog-update/blog-update.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeContainerComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  // Blogs
  { path: "blogs-management", component: BlogManagementComponent },
  { path: "create-blog", component: BlogCreateComponent },
  { path: "blogs", component: BlogListComponent },
  { path: "blog/view/:id", component: BlogDetailComponent },
  { path: "blog/update/:id", component: BlogUpdateComponent },
  // Projects
  { path: "projects", component: ProjectManagementComponent },
  // Events
  { path: "events", component: EventManagementComponent },
  // Shops

  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
