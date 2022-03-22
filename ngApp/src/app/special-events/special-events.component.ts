import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [
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
    this._eventService.getSpecialEvents().subscribe(
      (res) => (this.specialEvents = res),
      (err) => console.log(err)
    );
  }
}
