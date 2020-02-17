import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./full components/home/home.component";
import { AboutUsComponent } from "./full components/about-us/about-us.component";
import { LogInComponent } from "./full components/log-in/log-in.component";
import { TopPrimaryNavBarComponent } from "./partial components/top-primary-nav-bar/top-primary-nav-bar.component";
import { BottomNavBarComponent } from "./partial components/bottom-nav-bar/bottom-nav-bar.component";
import { FooterComponent } from "./partial components/footer/footer.component";
import { TopSecondaryNavBarComponent } from './partial components/top-secondary-nav-bar/top-secondary-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    LogInComponent,
    TopPrimaryNavBarComponent,
    BottomNavBarComponent,
    FooterComponent,
    TopSecondaryNavBarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
