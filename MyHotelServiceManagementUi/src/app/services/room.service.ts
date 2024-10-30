import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/ui-models/room.model';
import { ApiResponse } from '../models/ui-models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = 'https://localhost:5001/api/Room';

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/get-all-rooms`);
  }

  getRoomById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/Get-Room-By-Id/' + id);
  }
}
