import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuglistComponent } from './buglist/buglist.component';
import { BugcreationComponent } from './bugcreation/bugcreation.component';
import { CreatebugComponent } from './createbug/createbug.component';
import { BugupdateComponent } from './bugupdate/bugupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    BuglistComponent,
    BugcreationComponent,
    CreatebugComponent,
    BugupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
