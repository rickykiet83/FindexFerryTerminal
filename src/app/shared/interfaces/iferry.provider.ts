import { FerryModel } from '../models/ferry.model';
import { FerrySize } from '../enums/ferry.enum';
import { IVehicle } from './vehicle.interface';
import { VehicleModel } from '../models/vehicle.model';

export interface IFerryProvider {
    GetFerry(size: FerrySize): FerryModel;
    AddVehicle(item: IVehicle);
    GetVehicles(size: FerrySize): VehicleModel[];
    FerryStart(size: FerrySize);
}
