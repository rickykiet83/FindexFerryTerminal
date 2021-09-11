import { BaseFerryService } from './base-ferry.service';
import { FerrySize } from './../enums/ferry.enum';
import { IVehicle } from '../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { LargeFerryService } from './large-ferry.service';
import { SmallFerryService } from './small-ferry.service';
import { VehicleModel } from '../models/vehicle.model';
import { VehicleSize } from '../enums/vehicle.enum';

@Injectable()
export class FerryService extends BaseFerryService {
    constructor(public smallFerryService: SmallFerryService,
        public largeFerryService: LargeFerryService) {
        super();
    }

    AddVehicle(item: IVehicle) {
        if (item.category === VehicleSize.small) {
            this.smallFerryService.AddVehicle(item);
        }
        if (item.category === VehicleSize.large) {
            this.largeFerryService.AddVehicle(item);
        }
    }

    GetVehicles(size: FerrySize): VehicleModel[] {
        if (size === FerrySize.small) return this.smallFerryService.GetVehicles();
        if (size === FerrySize.large) return this.largeFerryService.GetVehicles();
    }
}
