import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  //loginService?: boolean;
  //authorized: boolean = false;

  constructor( public loginService: AuthService){}

  ngOnInit(): void {
    //this.authorized = localStorage.getItem("logged");
    //this.authorized = this.authLogin.isLogged();
  }
}
