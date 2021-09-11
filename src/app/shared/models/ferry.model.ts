import { FerrySize } from './../enums/ferry.enum';
import { IFerry } from './../interfaces/ferry.interface';
import { IVehicle } from '../interfaces/vehicle.interface';
import { VehicleModel } from './vehicle.model';

export class FerryModel implements IFerry {
    title: string;
    capacity: number;
    size: FerrySize;
    protected vehicles: IVehicle[] = [];

    constructor(title: string, capacity: number, size: FerrySize) {
        this.title = title;
        this.capacity = capacity;
        this.size = size;
    }

    GetVehicles(): VehicleModel[] {
        return this.vehicles.map(v => new VehicleModel(v.type, v.category));
    }

    get isFull(): boolean {
        return this.totalVehicle >= this.capacity;
    }

    get totalVehicle(): number {
        return this.vehicles.length;
    }

    addVehicle(item: IVehicle) {
        this.vehicles.push(item);
    }
}