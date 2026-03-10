import { Routes } from '@angular/router';
import { HomeComponent } from './features/home-component/home-component';
import { AboutComponent } from './features/about-component/about-component';
import { UserProfileComponent } from './features/user-profile-component/user-profile-component';
import { DashBoard } from './features/dash-board/dash-board';
import { loggedGuard } from './guard/LoggedGuard/logged-guard';
import { LoginSignalComponent } from './features/login-signal-component/login-signal-component';
import { EditComponent } from './features/edit-component/edit-component';
import { unavedChangesGuard } from './guard/UsavedChangesGuard/unaved-changes-guard';

export const routes: Routes = [
  {path:'', redirectTo: "home", pathMatch: 'full'},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"user/:id", component: UserProfileComponent},
  {path:"dashboard", component: DashBoard, canActivate: [loggedGuard]},
  {path:"login", component: LoginSignalComponent},
  {path:"edit", component: EditComponent, canDeactivate: [unavedChangesGuard]},
  {path:'**', redirectTo: "home"}
];
