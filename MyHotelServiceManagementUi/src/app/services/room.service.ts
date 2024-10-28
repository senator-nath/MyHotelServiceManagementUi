import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/ui-models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = 'https://localhost:5001/api/Room/get-all-rooms';
  private baseUrlGetRoom='https://localhost:5001/api/Room/Get-Room-By-Id'

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl);
  }
  getRoom(id:number): Observable<Room>{
    return this.http.get<Room>(this.baseUrlGetRoom + id)
  }
}
