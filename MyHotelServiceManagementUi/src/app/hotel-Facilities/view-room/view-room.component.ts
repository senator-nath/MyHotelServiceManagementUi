import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiResponse } from 'src/app/models/ui-models/api-response.model';
import { Room } from 'src/app/models/ui-models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit{
  roomId:number|null|undefined
  room: Room = {
    id: 0,
    roomNumber: '',
    price: 0,
    status: '',
    dateCreated: new Date(),
    roomTypeId: 0,
    urls: [],
    roomType: {
      id: 0,
      typeName: '',
      description: '',
      accessibilityFeatures: ''
    },
    roomAmenities: {
      id: 0,
      name: '',
      amenities: []
    }
  };
  baseUrl = 'https://localhost:5001';
  constructor(
    private readonly roomService:RoomService,
    private readonly route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomId = Number(params.get('id'));
      if(this.roomId){
        this.getRoomById(this.roomId);
      }
    
    });
  }

  getRoomById(id: number): void {
    this.roomService.getRoomById(id).subscribe(
      (response) => {
        this.room = response.data;
      },
      (error) => {
        console.error('Error loading room:', error);
      }
    );
  }
}
