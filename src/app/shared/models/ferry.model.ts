import * as shortId from 'shortid';

import { FerrySize } from './../enums/ferry.enum';
import { IFerry } from './../interfaces/ferry.interface';
import { IVehicle } from '../interfaces/vehicle.interface';
import { VehicleModel } from './vehicle.model';

export class FerryModel implements IFerry {
    protected vehicles: IVehicle[] = [];
    private _id: string = shortId.generate();
    constructor(public title: string, public capacity: number, public size: FerrySize) {
        this.title = title;
        this.capacity = capacity;
        this.size = size;
    }

    get id(): string {
        return this._id;
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

    Go() {
        this.vehicles = [];
    }
}