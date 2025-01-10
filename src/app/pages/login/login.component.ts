import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultInputComponent } from '../../components/default-input/default-input.component';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [LoginLayoutComponent, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './login.component.html',
  providers:[LoginService],
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private loginService: LoginService, private toastService: ToastrService){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Login realizado com sucesso!"),
      error: () => this.toastService.error("Erro ao tentar fazer login! Tente novamente mais tarde.")

    })
    console.log(this.loginForm.value);
  }
}
