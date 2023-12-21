import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService){}

  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
  }

  private createLoginForm():FormGroup {
    return this.fb.group({
      user:['', [Validators.required]],
      password:['',[Validators.required]],
    })
  }

  public submitFormulario(){
    if(this.loginForm.invalid){
      return
    } else {
      this.authService.loginProccess(this.loginForm.value);
    }

    //alert("Se envia el formulario")
  }
}
