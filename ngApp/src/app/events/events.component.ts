import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events = [
    {
      id: '1',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2020-04-23T18:25:43.511Z',
    },
    {
      id: '1',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2020-04-23T18:25:43.511Z',
    },
    {
      id: '2',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2020-04-23T18:25:43.511Z',
    },
    {
      id: '3',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2020-04-23T18:25:43.511Z',
    },
    {
      id: '4',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2020-04-23T18:25:43.511Z',
    },
  ];
  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(
      (res) => (this.events = res),
      (err) => console.log(err)
    );
  }
}
