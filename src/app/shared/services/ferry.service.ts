import { FerryModel } from './../models/ferry.model';
import { FerrySize } from './../enums/ferry.enum';
import { IFerryProvider } from '../interfaces/iferry.provider';
import { IVehicle } from '../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { TerminalService } from './terminal.service';
import { VehicleModel } from '../models/vehicle.model';
import { VehicleSize } from '../enums/vehicle.enum';

@Injectable()
export class FerryService extends TerminalService implements IFerryProvider {

    FerryStart(id: string | number) {
        this.GetFerry(id).Go();
    }

    AddVehicle(item: IVehicle) {
        let ferryAvail: FerryModel;
        switch (item.category) {

            case VehicleSize.small:
                ferryAvail = this.GetFerries().find(f => f.size === FerrySize.small &&
                    !f.isFull);
                if (ferryAvail) {
                    this.GetFerry(ferryAvail.id).addVehicle(item);
                    super.AddVehicle(item);
                }
                break;

            case VehicleSize.large:
                ferryAvail = this.GetFerries().find(f => f.size === FerrySize.large &&
                    !f.isFull);
                if (ferryAvail) {
                    this.GetFerry(ferryAvail.id).addVehicle(item);
                    super.AddVehicle(item);
                }
                break;
        }
    }

    GetFerry(id: number | string): FerryModel {
        return this.GetFerries().find(f => f.id === id);
    }

    GetVehicles(id: number | string): VehicleModel[] {
        return this.GetFerry(id).GetVehicles();
    }
}
