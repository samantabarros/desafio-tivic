import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  imports: [],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {
  @Input() btnLogin: string = "";
  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
