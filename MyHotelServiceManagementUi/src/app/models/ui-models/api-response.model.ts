import { Room } from "./room.model";

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message: string | null;
    statusCode: number;
  }