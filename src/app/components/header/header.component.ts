import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() username: string = "";
  
  constructor(public sidebarService:  SidebarService) { }
  ngOnInit(): void { }
  toggleSideBar(): void {
    this.sidebarService.toggleSidebar();
  }
}