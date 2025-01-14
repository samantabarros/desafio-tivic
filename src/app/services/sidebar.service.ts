import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public sidebarOpen$: Observable<boolean> = this.sidebarOpenSubject.asObservable();

  constructor() {}

  public toggleSidebar(): void {
    console.log("Entrou aqui")!
    const currentState = this.sidebarOpenSubject.getValue();
    this.sidebarOpenSubject.next(!currentState);
    console.log(currentState);
    console.log(this.sidebarOpenSubject);
  }
}