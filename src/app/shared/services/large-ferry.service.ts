import { BaseFerryService } from './base-ferry.service';
import { IVehicle } from './../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { VehicleModel } from './../models/vehicle.model';

@Injectable()
export class LargeFerryService extends BaseFerryService {
    vehicles: IVehicle[] = [];

    AddVehicle(item: IVehicle) {
        this.vehicles.push(item);
    }

    GetVehicles(): VehicleModel[] {
        return this.vehicles.map(v => new VehicleModel(v.type, v.category));
    }
}
