import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { OfficalSiteComponent } from './offical-site/offical-site.component';
import { ImagegalaryComponent } from './imagegalary/imagegalary.component';
import { ButtonaComponent } from './buttona/buttona.component';
import { GridComponent } from './grid/grid.component';
import { JqueryComponent } from './jquery/jquery.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    routingComponents,
    OfficalSiteComponent,
    ImagegalaryComponent,
    ButtonaComponent,
    GridComponent,
    JqueryComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
