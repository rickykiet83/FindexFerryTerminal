import { FerryModel } from '../models/ferry.model';
import { FerryService } from 'app/shared/services/ferry.service';
import { FerrySize } from '../enums/ferry.enum';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { VehicleModel } from './../models/vehicle.model';

@Injectable()
export class TerminalService {

    private smallFerry = new FerryModel('Small Ferry', 8, FerrySize.small);
    private largeFerry = new FerryModel('Large Ferry', 6, FerrySize.large);

    private ferries: FerryModel[] = [];

    onAddVehicle: Subject<any>;

    constructor() {
        this.ferries.push(this.smallFerry);
        this.ferries.push(this.largeFerry);
    }

    GetFerries(): FerryModel[] {
        return this.ferries;
    }

    get totalFerry(): number {
        return this.ferries.length;
    }

    get isAllFull(): boolean {
        return this.ferries.filter(f => f.isFull).length === this.totalFerry;
    }
}
