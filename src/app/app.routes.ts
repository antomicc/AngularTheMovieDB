import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieDComponent } from './pages/movie-d/movie-d.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "top-rated", component: TopRatedComponent},
    {path: "login", component: LoginComponent},
    {path: "movie/:id", component: MovieDComponent},
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '**', pathMatch: 'full', redirectTo: '/home'}
];
