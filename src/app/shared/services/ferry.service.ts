import { FerryModel } from './../models/ferry.model';
import { FerrySize } from './../enums/ferry.enum';
import { IFerryProvider } from '../interfaces/iferry.provider';
import { IVehicle } from '../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { VehicleModel } from '../models/vehicle.model';
import { VehicleSize } from '../enums/vehicle.enum';

@Injectable()
export class FerryService implements IFerryProvider {

    private smallFerry = new FerryModel('Small Ferry', 8, FerrySize.small);
    private largeFerry = new FerryModel('Large Ferry', 6, FerrySize.large);

    private ferries: FerryModel[] = [];

    constructor() {
        this.ferries.push(this.smallFerry);
        this.ferries.push(this.largeFerry);
    }

    FerryStart(size: FerrySize) {
        if (size === FerrySize.small)
            this.smallFerry.clearVehicle();
        if (size === FerrySize.large)
            this.largeFerry.clearVehicle();
    }

    GetFerries(): FerryModel[] {
        return this.ferries;
    }

    AddVehicle(item: IVehicle) {
        if (item.category === VehicleSize.small &&
            !this.smallFerry.isFull) {
            this.smallFerry.addVehicle(item);
        }
        if (item.category === VehicleSize.large &&
            !this.largeFerry.isFull) {
            this.largeFerry.addVehicle(item);
        }
    }

    GetFerry(size: FerrySize): FerryModel {
        if (size === FerrySize.small) return this.smallFerry;
        if (size === FerrySize.large) return this.largeFerry;
    }

    GetVehicles(size: FerrySize): VehicleModel[] {
        if (size === FerrySize.small) return this.smallFerry.GetVehicles();
        if (size === FerrySize.large) return this.largeFerry.GetVehicles();
    }
}
