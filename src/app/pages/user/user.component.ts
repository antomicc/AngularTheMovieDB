import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  
  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  onClickLogout(){
    localStorage.removeItem("logged");
    this.router.navigate(["/login"]);
  }
}
