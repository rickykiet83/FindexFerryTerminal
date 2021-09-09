import { IVehicleProvider, VehicleSize, VehicleSummary, VehicleType } from './../../shared/interfaces/ivehicle.provider';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService implements IVehicleProvider {

  constructor() { }
  GetVehicle(): VehicleSummary {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1: {
        return {
          type: VehicleType.car,
          category: VehicleSize.small
        };
      }
      case 2: {
        return {
          type: VehicleType.van,
          category: VehicleSize.small
        };
      }
      case 3: {
        return {
          type: VehicleType.truck,
          category: VehicleSize.large
        };
      }
      default: {
        return {
          type: VehicleType.bus,
          category: VehicleSize.large
        };
      }
    }
  }
}
