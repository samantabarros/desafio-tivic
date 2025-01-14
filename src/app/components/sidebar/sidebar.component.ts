import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { SidebarService } from '../../services/sidebar.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, MatSidenavModule, MatToolbarModule, MatNavList],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  sidebarOpen$;
  constructor(private router: Router, private loginService: LoginService, private sidebarService: SidebarService) { 
    this.sidebarOpen$ = this.sidebarService.sidebarOpen$;
  } 
  ngOnInit(): void {}
  logout() {
    this.loginService.deslogar();
  }
}

