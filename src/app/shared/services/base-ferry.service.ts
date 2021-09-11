import { FerryModel } from '../models/ferry.model';
import { FerrySize } from '../enums/ferry.enum';
import { IFerryProvider } from '../interfaces/iferry.provider';
import { VehicleModel } from '../models/vehicle.model';

export abstract class BaseFerryService implements IFerryProvider {
    private ferries: FerryModel[] = [];

    constructor() {
        this.initFerries();
    }

    GetFerries(): FerryModel[] {
        return this.ferries.map(f => new FerryModel(f.title, f.capacity, f.size));
    }

    private initFerries() {
        this.ferries.push(new FerryModel('Small Ferry', 6, FerrySize.small));
        this.ferries.push(new FerryModel('Large Ferry', 8, FerrySize.large));
    }

    abstract GetVehicles(size: FerrySize): VehicleModel[];
    abstract AddVehicle(item: IVehicle);
}