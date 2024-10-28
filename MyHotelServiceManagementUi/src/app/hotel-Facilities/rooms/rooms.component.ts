import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/ui-models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms: Room[] = [];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(response => {
      this.rooms = response;
    }, error => {
      console.error(error);
    });
  }
}
