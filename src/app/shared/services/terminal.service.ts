import { FerryModel } from '../models/ferry.model';
import { FerrySize } from '../enums/ferry.enum';
import { ITerminalProvider } from './../interfaces/terminal.interface';
import { IVehicle } from './../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { TicketModel } from '../models/ticket.model';

@Injectable()
export class TerminalService implements ITerminalProvider {

    private smallFerry = new FerryModel('Small Ferry', 8, FerrySize.small);
    private largeFerry = new FerryModel('Large Ferry', 6, FerrySize.large);
    private ferries: FerryModel[] = [];
    private tickets: TicketModel[] = [];

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

    GetTickets(): TicketModel[] {
        return this.tickets;
    }

    GetFerries(): FerryModel[] {
        return this.ferries;
    }

    GenerateTicket(item: IVehicle) {
        const ticket = new TicketModel(item.type);
        this.tickets.push(ticket);
    }

    get totalFerry(): number {
        return this.ferries.length;
    }

    get totalTicket(): number {
        return this.tickets.length;
    }

    GetFerriesBySize(size: FerrySize): FerryModel[] {
        return this.GetFerries().filter(f => f.size === size);
    }

    get isAllFerryFull(): boolean {
        return this.ferries.filter(f => f.isFull).length === this.totalFerry;
    }
}
