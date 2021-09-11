import { BaseFerryService } from './base-ferry.service';
import { FerryModel } from '../models/ferry.model';
import { FerrySize } from '../enums/ferry.enum';
import { IVehicle } from './../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { VehicleModel } from './../models/vehicle.model';

@Injectable()
export class LargeFerryService extends BaseFerryService {
    vehicles: IVehicle[] = [];

    private ferryModel: FerryModel;

    constructor() {
        super();
        this.ferryModel = new FerryModel('Large Ferry', 8, FerrySize.small);
    }

    get Ferry(): FerryModel {
        return this.ferryModel;
    }

    AddVehicle(item: IVehicle): boolean {
        if (this.vehicles.length < this.ferryModel.capacity) {
            this.vehicles.push(item);
            return true;
        }
        return false;
    }

    GetVehicles(): VehicleModel[] {
        return this.vehicles.map(v => new VehicleModel(v.type, v.category));
    }
}
