import { FerrySize } from '../enums/ferry.enum';
import { IFerryProvider } from '../interfaces/iferry.provider';
import { IVehicle } from '../interfaces/vehicle.interface';
import { VehicleModel } from '../models/vehicle.model';

export abstract class BaseFerryService implements IFerryProvider {
    abstract GetVehicles(size: FerrySize): VehicleModel[];
    abstract AddVehicle(item: IVehicle): boolean;
}