import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiModule } from './api/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ApiModule.forRoot({ rootUrl: 'http://localhost:8080' }),
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
