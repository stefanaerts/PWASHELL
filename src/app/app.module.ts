import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { LeftSideNavComponent } from './views/sidenav/left-side-nav/left-side-nav.component';
import { RightSideNavComponent } from './views/sidenav/right-side-nav/right-side-nav.component';
import { ContentComponent } from './views/contentcanvas/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideNavComponent,
    RightSideNavComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
