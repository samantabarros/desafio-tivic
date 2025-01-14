import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operacoes',
  imports: [MatIconModule],
  templateUrl: './operacoes.component.html',
  styleUrl: './operacoes.component.scss'
})
export class OperacoesComponent {
  constructor(private router: Router){}
  navigate(): void{
    this.router.navigate(["adicionar-operacao"])
  }
}
