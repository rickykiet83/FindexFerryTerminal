import { FerryModel } from './../models/ferry.model';
import { FerrySize } from './../enums/ferry.enum';
import { IFerryProvider } from '../interfaces/iferry.provider';
import { IVehicle } from '../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { SystemConstants } from 'app/common/system.constants';
import { VehicleModel } from '../models/vehicle.model';
import { VehicleSize } from '../enums/vehicle.enum';

@Injectable()
export class FerryService implements IFerryProvider {

    private smallFerry = new FerryModel('Small Ferry', 6, FerrySize.small);
    private largeFerry = new FerryModel('Large Ferry', 8, FerrySize.small);

    AddVehicle(item: IVehicle): boolean {
        if (item.category === VehicleSize.small &&
            this.smallFerry.totalVehicle < SystemConstants.TOTAL_ITEM_ON_SMALL_FERRY) {
            this.smallFerry.addVehicle(item);
            return true;
        }
        if (item.category === VehicleSize.large &&
            this.largeFerry.totalVehicle < SystemConstants.TOTAL_ITEM_ON_LARGE_FERRY) {
            this.largeFerry.addVehicle(item);
            return true;
        }

        return false;
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
