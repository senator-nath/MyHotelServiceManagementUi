import { RoomAmenities } from "./RoomAmenities.model";
import { RoomType } from "./roomType.model";

export interface viewRoom {
    id: number;
    roomNumber: string;
    price: number;
    status: string;
    dateCreated: Date; // or string if you prefer to handle date parsing manually
    roomType: RoomType;
    roomAmenities: RoomAmenities;
    urls: null | string[]; // Assuming urls could be null or an array of strings
  }