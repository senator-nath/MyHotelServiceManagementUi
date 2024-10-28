import { Amenity } from "./amenity.model";
import { Room } from "./room.model";

export interface RoomType {
    id: number;
  typeName: string;
  description: string;
  accessibilityFeatures: string;
  rooms: Room[];
  }