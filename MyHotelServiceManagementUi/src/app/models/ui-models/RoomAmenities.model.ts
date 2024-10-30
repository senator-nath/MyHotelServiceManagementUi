import { Amenity } from "./amenity.model";
import { Room } from "./room.model";

export interface RoomAmenities {
    id: number;
    name: string;
     
    amenities: string[];
  }