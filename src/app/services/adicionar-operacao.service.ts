import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AddOperacaoResponse } from '../types/add-operacao.type';

@Injectable({
  providedIn: 'root'
})
export class AdicionarOperacaoService {
    apiUrl: string = "http://localhost:3000"

  constructor(private router: Router, private httpClient: HttpClient) { }
  addOperacao(responsavel: string, data: string, local: string, veiculos: [], status: string){
    return this.httpClient.post<AddOperacaoResponse>(this.apiUrl + "/operacoes", {responsavel, data, local, veiculos, status}).pipe()
  }

}
