import { FerrySize } from './../enums/ferry.enum';
import { IVehicle } from './vehicle.interface';
import { VehicleSize } from '../enums/vehicle.enum';
export interface IFerry {
    title: string;
    capacity: number;
    size: FerrySize;
    addVehicle(item: IVehicle);
    getVehicles(): IVehicle[];
}