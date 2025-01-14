import { Component } from '@angular/core';
import { GetDadosServicesService } from '../../services/get-dados-services.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  totalOperacoes: number = 0;
  operacoesEmAndamento: number = 0;
  operacoesFinalizadas: number = 0;

  constructor(private dadosService: GetDadosServicesService) {}

  ngOnInit(): void {
    this.dadosService.getTotalOperacoes().subscribe((total) => {
      this.totalOperacoes = total;
    });

    this.dadosService.getOperacoesEmAndamento().subscribe((emAndamento) => {
      this.operacoesEmAndamento = emAndamento;
    });

    this.dadosService.getOperacoesFinalizadas().subscribe((finalizadas) => {
      this.operacoesFinalizadas = finalizadas;
    });
  }
}
