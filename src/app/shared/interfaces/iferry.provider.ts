import { FerryModel } from '../models/ferry.model';
import { IVehicle } from './vehicle.interface';

export interface IFerryProvider {
    GetFerry(id: number): FerryModel;
    AddVehicle(item: IVehicle);
    FerryStart(id: number);
}
