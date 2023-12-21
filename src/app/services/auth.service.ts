import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public loginProccess(obj: any) {
    console.log(obj);
    if(obj.user === 'antomic' && obj.password === 'Prueba123456') {   
      alert("Ingreso Correcto")
      localStorage.setItem('logged', 'true');
      this.router.navigate(["/home"]);
    }
  }

  public isLogged():boolean {
    if(localStorage.getItem("logged") === 'true'){
      return true;
    } else {
      return false;
    }
  }
}
