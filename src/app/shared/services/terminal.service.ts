import { FerryModel } from '../models/ferry.model';
import { FerrySize } from '../enums/ferry.enum';
import { ITerminalProvider } from './../interfaces/terminal.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class TerminalService implements ITerminalProvider {

    private smallFerry = new FerryModel('Small Ferry', 8, FerrySize.small);
    private largeFerry = new FerryModel('Large Ferry', 6, FerrySize.large);
    private ferries: FerryModel[] = [];

    constructor() {
        this.initFerries();
    }

    get terminalWorkerBonus(): number {
        return 0.1;
    };

    get terminalBonus(): number {
        return 0.9;
    }

    private initFerries() {
        this.ferries.push(this.smallFerry);
        this.ferries.push(this.largeFerry);
    }

    GetFerries(): FerryModel[] {
        return this.ferries;
    }

    get totalFerry(): number {
        return this.ferries.length;
    }

    GetFerriesBySize(size: FerrySize): FerryModel[] {
        return this.GetFerries().filter(f => f.size === size);
    }

    get isAllFerryFull(): boolean {
        return this.ferries.filter(f => f.isFull).length === this.totalFerry;
    }
}
