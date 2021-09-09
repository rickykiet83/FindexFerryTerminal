import { VehicleSize, VehicleType } from "../enums/vehicle.enum";

export interface IVehicle {
    type: VehicleType;
    category: VehicleSize;
}