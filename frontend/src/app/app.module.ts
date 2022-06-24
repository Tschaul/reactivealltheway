import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListModule } from './movie-list/movie-list.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageModule } from './about-page/about-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    MovieListModule,
    GraphQLModule,
    HttpClientModule,
    AboutPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
