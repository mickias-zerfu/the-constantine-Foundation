import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";


import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from "./material.module";

import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './scaffold/header/header.component';
import { FooterComponent } from './scaffold/footer/footer.component';
import { BlogManagementComponent } from './pages/blog-management/blog-management.component';
import { EventManagementComponent } from './pages/event-management/event-management.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogCreateComponent } from './pages/blog-management/blog-create/blog-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogListComponent } from './pages/blog-management/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-management/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    BlogManagementComponent,
    EventManagementComponent,
    ProjectManagementComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogCreateComponent,
    BlogListComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
