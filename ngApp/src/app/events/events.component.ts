import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: any = [];
  constructor(private _eventService: EventService, private _router: Router) {}

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(
      (res) => {
        this.events = res;
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
          if (err.status === 500) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
