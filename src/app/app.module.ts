import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WpMenuComponent } from './base/wp-menu/wp-menu.component';
const routes: Routes = [
  {
    path:':id',
    component:AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WpMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
