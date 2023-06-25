import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PromedioComponent } from './dashboard/promedio/promedio.component';
import { MaterialModule } from './Angular-material/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PromedioComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'dashboard',component:DashboardComponent,
      children:[
        {path: 'home',component:HomeComponent},
        {path:'promedio',component:PromedioComponent}
      ]
    },
      {path:'', redirectTo: 'dashboard',pathMatch:'full'},
      {path:'**',component: PageNotFoundComponent}
   


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
