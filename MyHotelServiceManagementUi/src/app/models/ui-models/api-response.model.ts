import { Room } from "./room.model";

export interface ApiResponse {
    success: boolean;
    data: Room;
    message: string | null;
    statusCode: number;
  }