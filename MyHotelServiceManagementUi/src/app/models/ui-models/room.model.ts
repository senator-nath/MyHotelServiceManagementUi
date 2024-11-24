import { Booking } from "./bookings.model";
import { RoomAmenities } from "./RoomAmenities.model";
import { RoomType } from "./roomType.model";

export interface Room {
  id: number;
  roomNumber: string;
  price: number;
  status: string;
  dateCreated: Date;
  roomTypeId: number;
  roomType: RoomType;
  roomAmenities: RoomAmenities;
  urls: string[];
  }