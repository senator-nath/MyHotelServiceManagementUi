import { Room } from "./room.model";
import { User } from "./user.model";

export interface Booking {
    id: number;
    bookingDate: Date;
    checkInDate: Date;
    checkOutDate: Date;
    numberOfGuests: number;
    status: string;
    userId: string;
    user: User;
    roomId: number;
    room: Room;
  }