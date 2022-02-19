import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FreeSessionComponent } from './free-session/free-session.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './home/head/head.component';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';
import { LearningPathComponent } from './learning-path/learning-path.component';
import { BodyComponent } from './home/body/body.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FreeSessionComponent,
    HomeComponent,
    HeadComponent,
    EventComponent,
    FooterComponent,
    LearningPathComponent,
    BodyComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
