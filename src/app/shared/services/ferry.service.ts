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

    FerryStart(id: string | number) {
        this.GetFerry(id).Go();
    }

    GetFerries(): FerryModel[] {
        return this.ferries;
    }

    AddVehicle(item: IVehicle) {
        let ferryAvail: FerryModel;
        switch (item.category) {

            case VehicleSize.small:
                ferryAvail = this.ferries.find(f => f.size === FerrySize.small &&
                    !f.isFull);
                if (ferryAvail) {
                    this.GetFerry(ferryAvail.id).addVehicle(item);
                }
                break;

            case VehicleSize.large:
                ferryAvail = this.ferries.find(f => f.size === FerrySize.large &&
                    !f.isFull);
                if (ferryAvail) {
                    this.GetFerry(ferryAvail.id).addVehicle(item);
                }
                break;
        }
    }

    GetFerry(id: number | string): FerryModel {
        return this.ferries.find(f => f.id === id);
    }

    GetVehicles(id: number | string): VehicleModel[] {
        return this.GetFerry(id).GetVehicles();
    }
}
