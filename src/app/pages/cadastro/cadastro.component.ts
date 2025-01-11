import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultInputComponent } from '../../components/default-input/default-input.component';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface CadastroForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-cadastro',
  imports: [LoginLayoutComponent, ReactiveFormsModule, DefaultInputComponent],
  templateUrl: './cadastro.component.html',
  providers:[LoginService],
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm!: FormGroup<CadastroForm>;

  constructor(private router: Router, private loginService: LoginService, private toastService: ToastrService){
    this.cadastroForm = new FormGroup({

      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

  submit(){
    this.loginService.cadastro(this.cadastroForm.value.name, this.cadastroForm.value.email, this.cadastroForm.value.password).subscribe({
      next: () => this.toastService.success("Cadastro realizado com sucesso!"),
      error: () => this.toastService.error("Erro ao cadastrar usuário! Tente novamente.")

    })
    console.log(this.cadastroForm.value);
  }

  navigate(){
    this.router.navigate([""])
  }
}
