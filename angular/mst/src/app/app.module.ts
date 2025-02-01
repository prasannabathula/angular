import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModule } from '../directives/directives.module';
import { NgContainerComponent } from './components/ng-container/ng-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
