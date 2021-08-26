import { Component } from '@angular/core';
import {BackendService} from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tickets = this.backend.tickets();
  users = this.backend.users();

  constructor(private backend: BackendService) {}
}
