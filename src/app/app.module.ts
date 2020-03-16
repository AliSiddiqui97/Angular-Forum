import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ThreadviewComponent } from './threadview/threadview.component';
import { ProfileformComponent } from './profileform/profileform.component';
import { ThreadformComponent } from './threadform/threadform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TagsAndAdsComponent } from './tags-and-ads/tags-and-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ProfilepageComponent,
    ThreadviewComponent,
    ProfileformComponent,
    ThreadformComponent,
    NavbarComponent,
    FooterComponent,
    TagsAndAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
