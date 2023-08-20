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
import { ShopContainerComponent } from './home-container/shop-container/shop-container.component';
import { CampaignContainerComponent } from './home-container/campaign-container/campaign-container.component';
import { UserModule } from './user/user.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BlogUpdateComponent } from './pages/blog-management/blog-update/blog-update.component';
import { PartnerContainerComponent } from './home-container/partner-container/partner-container.component';
import { EventUpdateComponent } from './pages/event-management/event-update/event-update.component';
import { EventListComponent } from './pages/event-management/event-list/event-list.component';
import { EventDetailComponent } from './pages/event-management/event-detail/event-detail.component';
import { EventCreateComponent } from './pages/event-management/event-create/event-create.component';
import { ProjectUpdateComponent } from './pages/project-management/project-update/project-update.component';
import { ProjectListComponent } from './pages/project-management/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/project-management/project-detail/project-detail.component';
import { ProjectCreateComponent } from './pages/project-management/project-create/project-create.component';
import { ProductUpdateComponent } from './pages/shop/product-update/product-update.component';
import { ProductListComponent } from './pages/shop/product-list/product-list.component';
import { ProductDetailComponent } from './pages/shop/product-detail/product-detail.component';
import { ProductCreateComponent } from './pages/shop/product-create/product-create.component';
import { CartComponent } from './pages/shop/cart/cart.component';
import { CheckoutComponent } from './pages/shop/checkout/checkout.component';
import { OrderConfirmationComponent } from './pages/shop/order-confirmation/order-confirmation.component';
import { MyOrdersComponent } from './pages/shop/my-orders/my-orders.component';
import { OrderDetailComponent } from './pages/shop/order-detail/order-detail.component';
import { PaymentComponent } from './pages/shop/payment/payment.component';
import { SearchComponent } from './pages/shop/search/search.component';
import { CategoriesComponent } from './pages/shop/categories/categories.component';
import { ReviewComponent } from './pages/shop/review/review.component';
import { RelatedProductsComponent } from './pages/shop/related-products/related-products.component';
import { AuthComponent } from './auth/auth.component';
import { BannerComponent } from './shared/banner/banner.component';

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
    BlogDetailComponent,
    ShopContainerComponent,
    CampaignContainerComponent,
    DashboardComponent,
    BlogUpdateComponent,
    PartnerContainerComponent,
    EventUpdateComponent,
    EventListComponent,
    EventDetailComponent,
    EventCreateComponent,
    ProjectUpdateComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectCreateComponent,
    ProductUpdateComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    MyOrdersComponent,
    OrderDetailComponent,
    PaymentComponent,
    SearchComponent,
    CategoriesComponent,
    ReviewComponent,
    RelatedProductsComponent,
    AuthComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModule,
    MaterialModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
