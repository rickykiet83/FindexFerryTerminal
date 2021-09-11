import { VehicleType } from './../enums/vehicle.enum';
export interface ITicket {
    vehicleType: VehicleType;
    cost: number;
}