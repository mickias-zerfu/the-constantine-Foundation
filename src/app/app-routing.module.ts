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
import { EventCreateComponent } from './pages/event-management/event-create/event-create.component';
import { EventDetailComponent } from './pages/event-management/event-detail/event-detail.component';
import { EventListComponent } from './pages/event-management/event-list/event-list.component';
import { EventUpdateComponent } from './pages/event-management/event-update/event-update.component';
import { ProjectCreateComponent } from './pages/project-management/project-create/project-create.component';
import { ProjectDetailComponent } from './pages/project-management/project-detail/project-detail.component';
import { ProjectListComponent } from './pages/project-management/project-list/project-list.component';
import { ProjectUpdateComponent } from './pages/project-management/project-update/project-update.component';
import { ProductListComponent } from './pages/shop/product-list/product-list.component';
import { ShopContainerComponent } from './home-container/shop-container/shop-container.component';
import { ShopManagementComponent } from './pages/shop/shop-management/shop-management.component';
import { CategoriesComponent } from './pages/shop/categories/categories.component';
import { OrdersComponent } from './pages/shop/orders/orders.component';
import { ProductMgmtComponent } from './pages/shop/product-mgmt/product-mgmt.component';
import { ProductCreateComponent } from './pages/shop/product-mgmt/product-create/product-create.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeContainerComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  // Blogs
  { path: "blogs-management", component: BlogManagementComponent },
  { path: "blog/create-blog", component: BlogCreateComponent },
  { path: "blogs", component: BlogListComponent },
  { path: "blog/view/:id", component: BlogDetailComponent },
  { path: "blog/update/:id", component: BlogUpdateComponent },
  // Projects
  { path: "projects-management", component: ProjectManagementComponent },
  { path: "project/create-project", component: ProjectCreateComponent },
  { path: "projects", component: ProjectListComponent },
  { path: "project/view/:id", component: ProjectDetailComponent },
  { path: "project/update/:id", component: ProjectUpdateComponent },
  // Events
  { path: "events-management", component: EventManagementComponent },
  { path: "event/create-event", component: EventCreateComponent },
  { path: "events", component: EventListComponent },
  { path: "event/view/:id", component: EventDetailComponent },
  { path: "event/update/:id", component: EventUpdateComponent },
  // Shops
  {
    path: "shops", component: ProductListComponent
  },

  { path: " create-shop", component: ShopContainerComponent },
  { path: "shop-mgmt", component: ShopManagementComponent },
  { path: "shop-mgmt/category", component: CategoriesComponent },
  { path: "shop-mgmt/orders", component: OrdersComponent },
  { path: "shop-mgmt/products", component: ProductMgmtComponent },
  { path: "shop-mgmt/products/create", component: ProductCreateComponent },
  { path: " view/:id", component: ShopContainerComponent },
  { path: " update/:id", component: ShopContainerComponent },

  // static pages
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
