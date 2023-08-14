import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule
  ],
  exports :[
    LoginComponent,
    SidebarComponent

  ]

})
export class UserModule { }
