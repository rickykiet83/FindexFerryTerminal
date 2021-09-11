import { FerryModel } from './../models/ferry.model';
import { FerrySize } from './../enums/ferry.enum';
import { IFerryProvider } from '../interfaces/iferry.provider';
import { IVehicle } from '../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { TerminalService } from './terminal.service';
import { VehicleSize } from '../enums/vehicle.enum';

@Injectable()
export class FerryService extends TerminalService implements IFerryProvider {

    FerryStart(id: string | number) {
        this.GetFerryById(id).Go();
    }

    AddVehicle(item: IVehicle) {
        let ferryAvail: FerryModel;
        switch (item.category) {

            case VehicleSize.small:
                ferryAvail = this.GetFerriesBySize(FerrySize.small).filter(f => !f.isFull)[0];
                break;

            case VehicleSize.large:
                ferryAvail = this.GetFerriesBySize(FerrySize.large).filter(f => !f.isFull)[0];
                break;
        }

        if (ferryAvail) {
            this.GetFerryById(ferryAvail.id).addVehicle(item);
            super.AddVehicle(item);
        }
    }

    GetFerryById(id: number | string): FerryModel {
        return this.GetFerries().find(f => f.id === id);
    }

}
