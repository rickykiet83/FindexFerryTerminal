import { FerrySize } from '../enums/ferry.enum';
import { VehicleModel } from './../models/vehicle.model';
export interface IFerry {
    id: number;
    title: string;
    capacity: number;
    size: FerrySize;
    GetVehicles(): VehicleModel[];
    Go();
}