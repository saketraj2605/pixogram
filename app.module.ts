import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './approuting'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SignupComponent } from './signup/signup.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { SigninComponent } from './signin/signin.component';
import { MymediaComponent } from './mymedia/mymedia.component';
import { FollowComponent } from './follow/follow.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    SignupComponent,
    ImageuploadComponent,
    SigninComponent,
    MymediaComponent,
    FollowComponent,
    MainnavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
