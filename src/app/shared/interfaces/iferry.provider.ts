import { FerryModel } from './../models/ferry.model';
import { FerrySize } from '../enums/ferry.enum';
import { IVehicle } from './vehicle.interface';
import { InjectionToken } from "@angular/core";
import { VehicleModel } from '../models/vehicle.model';

export const FERRY_PROVIDER = new InjectionToken("IFerryProvider");

export interface IFerryProvider {
    AddVehicle(item: IVehicle);
    GetFerries(): FerryModel[];
    GetVehicles(size: FerrySize): VehicleModel[];
}
