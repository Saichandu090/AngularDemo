export interface Room {
    totalRooms: number;  //Making them Optional 
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomList{
    roomNumber:number;
    roomType:string;
    amenities:string;
    price:number;
    photos:string;
    checkInTime:Date;
    checkOutTime:Date;
}