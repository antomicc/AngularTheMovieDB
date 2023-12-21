import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const loginGuard = () => {

    const router = inject(Router);
   
    if(localStorage.getItem('logged') === 'true'){
        return true;
    } else {
        alert("No has iniciado sesión");
        router.navigate(['/login']);
        return false;
    } 
}