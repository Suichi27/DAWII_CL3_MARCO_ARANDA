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
import { HttpClientModule } from '@angular/common/http';
import { ListaHabitacionComponent } from './dashboard/lista/lista-habitacion/lista-habitacion.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PromedioComponent,
    PageNotFoundComponent,
    ListaHabitacionComponent
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
        {path:'promedio',component:PromedioComponent},
        {path:'lista',component:ListaHabitacionComponent}
      ]
    },
      {path:'', redirectTo: 'dashboard',pathMatch:'full'},
      {path:'**',component: PageNotFoundComponent}
    ]),
    HttpClientModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
