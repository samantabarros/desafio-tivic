import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:3000"

  constructor(private httpClient: HttpClient) {}
  
  login(email: string, password: string): Observable<any>{
    return this.httpClient.get<any[]>(this.apiUrl + "/users").pipe(
      map((usuarios) => {
        const usuario = usuarios.find(
          (u) => u.email === email && u.password === password
        );
        if(!usuario){
        throw new Error('Email ou senha inválidos');
        }
        return usuario;
      }),
      tap((usuario) => {
        sessionStorage.setItem("auth-token", usuario.id)
        sessionStorage.setItem("username", usuario.name)
      }),
      catchError((error) => {
        return throwError(() => new Error(error.message));
      })
    )
  }

  cadastro(name: string, email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/users", {name, email, password}).pipe(
        /*tap((usuario) => {
          sessionStorage.setItem("auth-token", usuario.token)
          sessionStorage.setItem("user-name", usuario.name)
        })*/
    )
  }
    
}
