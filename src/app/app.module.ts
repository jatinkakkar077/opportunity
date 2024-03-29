import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { OpportunitylistComponent } from './opportunitylist/opportunitylist.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { OpportunityDetailComponent } from './opportunity-detail/opportunity-detail.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MatTableModule } from '@angular/material/table'  ;

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    OpportunitylistComponent,
    OpportunityDetailComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
