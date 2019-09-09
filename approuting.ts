import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from 'src/app/signup/signup.component';
import { MainContentComponent } from 'src/app/main-content/main-content.component';
import { ImageuploadComponent } from 'src/app/imageupload/imageupload.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import {SigninComponent} from 'src/app/signin/signin.component';
import { FollowComponent } from './follow/follow.component';
import { MymediaComponent } from './mymedia/mymedia.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'main'},
  { path: 'images', component: ImageuploadComponent },
  { path: 'main', component: MainContentComponent },
  {path:'signup',component: SignupComponent},
  {path:'signin',component: SigninComponent},
  {path:'follow',component: FollowComponent},
  {path:'mymedia',component: MymediaComponent} ,
  {path:'home',component: HomeComponent} 

 
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
