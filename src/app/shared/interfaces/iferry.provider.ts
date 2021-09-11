import { FerryModel } from '../models/ferry.model';
import { FerrySize } from '../enums/ferry.enum';
import { IVehicle } from './vehicle.interface';
import { VehicleModel } from '../models/vehicle.model';

export interface IFerryProvider {
    GetFerry(id: number): FerryModel;
    AddVehicle(item: IVehicle);
    GetVehicles(id: number): VehicleModel[];
    FerryStart(id: number);
}
