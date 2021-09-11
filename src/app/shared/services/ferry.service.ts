import { FerryModel } from '../models/ferry.model';
import { FerrySize } from './../enums/ferry.enum';
import { IFerryProvider } from './../interfaces/iferry.provider';
import { Injectable } from '@angular/core';

@Injectable()
export class FerryService implements IFerryProvider {
    private ferries: FerryModel[] = [];

    constructor() {
        this.initFerries();
    }

    GetFerries(): FerryModel[] {
        return this.ferries;
    }

    private initFerries() {
        const smallFerry = new FerryModel('Small Ferry', 8, FerrySize.small);
        const largeFerry = new FerryModel('Large Ferry', 6, FerrySize.large);
        this.ferries.push(smallFerry);
        this.ferries.push(largeFerry);
    }

}