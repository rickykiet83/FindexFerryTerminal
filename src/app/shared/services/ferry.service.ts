import { FerryModel } from './../models/ferry.model';
import { FerrySize } from './../enums/ferry.enum';
import { IFerryProvider } from '../interfaces/iferry.provider';
import { IVehicle } from '../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { TerminalService } from './terminal.service';
import { VehicleSize } from '../enums/vehicle.enum';

@Injectable()
export class FerryService implements IFerryProvider {

    constructor(private terminalService: TerminalService) {
        if (this.terminalService.GetFerries().length === 0) {
            throw new Error('Terminal should have at lease one Ferry!');
        }
    }

    FerryStart(id: string | number) {
        this.GetFerryById(id).Go();
    }

    AddVehicle(item: IVehicle) {
        let ferryAvail: FerryModel;
        switch (item.category) {

            case VehicleSize.small:
                ferryAvail = this.terminalService.GetFerriesBySize(FerrySize.small).filter(f => !f.isFull)[0];
                break;

            case VehicleSize.large:
                ferryAvail = this.terminalService.GetFerriesBySize(FerrySize.large).filter(f => !f.isFull)[0];
                break;
        }

        if (ferryAvail) {
            this.terminalService.GenerateTicket(item);
            this.GetFerryById(ferryAvail.id).addVehicle(item);
        }
    }

    GetFerryById(id: number | string): FerryModel {
        return this.terminalService.GetFerries().find(f => f.id === id);
    }
}
