import { IVehicle } from './vehicle.interface';
export interface IFerry {
    title: string;
    capacity: number;
    getVehicles(): IVehicle[];
}