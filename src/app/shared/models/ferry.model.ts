import { FerrySize } from './../enums/ferry.enum';
import { IFerry } from './../interfaces/ferry.interface';
import { IVehicle } from '../interfaces/vehicle.interface';

export class FerryModel implements IFerry {
    title: string;
    capacity: number;
    size: FerrySize;

    private vehicles: IVehicle[] = [];
    constructor(title: string, capacity: number, size: FerrySize) {
        this.title = title;
        this.capacity = capacity;
        this.size = size;
    }

    addVehicle(item: IVehicle) {
        this.vehicles.push(item);
    }

    getVehicles(): IVehicle[] {
        return this.vehicles;
    }
}