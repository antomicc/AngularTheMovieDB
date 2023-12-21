import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { LoginComponent } from './layout/publico/login/login.component';
import { MovieDComponent } from './pages/movie-d/movie-d.component';
import { loginGuard } from './guards/login.guard';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [

    {path: "home", component: HomeComponent, canActivate: [loginGuard]},
    {path: "top-rated", component: TopRatedComponent, canActivate: [loginGuard]},
    {path: "movie/:id", component: MovieDComponent, canActivate: [loginGuard]},
    {path: "user", component: UserComponent, canActivate: [loginGuard]},
    {path: "login", component: LoginComponent},
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '**', pathMatch: 'full', redirectTo: '/home'},
];
