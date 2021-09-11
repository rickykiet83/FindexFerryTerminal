import { VehicleSize, VehicleType } from '../enums/vehicle.enum';

import { IVehicleProvider } from './../../shared/interfaces/ivehicle.provider';
import { Injectable } from '@angular/core';
import { VehicleModel } from '../models/vehicle.model';

@Injectable()
export class VehicleService implements IVehicleProvider {

    constructor() { }
    GetVehicle(): VehicleModel {
        const randomNumber = Math.floor(Math.random() * 4) + 1;

        switch (randomNumber) {
            case 1: {
                return new VehicleModel(VehicleType.car, VehicleSize.small);
            }
            case 2: {
                return new VehicleModel(VehicleType.van, VehicleSize.small);
            }
            case 3: {
                return new VehicleModel(VehicleType.truck, VehicleSize.large);
            }
            default: {
                return new VehicleModel(VehicleType.bus, VehicleSize.large);
            }
        }

    }
}
