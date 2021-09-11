import { FerryModel } from '../models/ferry.model';
import { FerrySize } from '../enums/ferry.enum';
import { ITerminal } from './../interfaces/terminal.interface';
import { IVehicle } from './../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { TicketModel } from '../models/ticket.model';

@Injectable()
export class TerminalService implements ITerminal {

    private smallFerry = new FerryModel('Small Ferry', 8, FerrySize.small);
    private largeFerry = new FerryModel('Large Ferry', 6, FerrySize.large);
    private ferries: FerryModel[] = [];

    private tickets: TicketModel[] = [];

    private terminalWorkerBonus = 0.1;

    constructor() {
        this.ferries.push(this.smallFerry);
        this.ferries.push(this.largeFerry);
    }

    GetTickets(): TicketModel[] {
        return this.tickets;
    }

    GetFerries(): FerryModel[] {
        return this.ferries;
    }

    AddVehicle(item: IVehicle) {
        this.GenerateTicket(item);
    }

    protected GenerateTicket(item: IVehicle) {
        const ticket = new TicketModel(item.type);
        this.tickets.push(ticket);
    }

    get terminalWorkerProfit(): number {
        if (this.tickets.length > 0) {
            const total = this.tickets.map(t => t.cost)
                .reduce((accumulator, currentValue) => accumulator + (currentValue * this.terminalWorkerBonus), 0);
            return +total.toFixed(2);
        }
        return 0;
    }

    get terminalProfit(): number {
        if (this.tickets.length > 0) {
            const total = this.tickets.map(t => t.cost)
                .reduce((accumulator, currentValue) => accumulator + (currentValue * 0.9), 0);
            return +total.toFixed(2);
        }
        return 0;
    }

    get totalFerry(): number {
        return this.ferries.length;
    }

    get isSmallFerriesFull(): boolean {
        return this.ferries.filter(f => f.size === FerrySize.small && f.isFull).length > 0;
    }

    get isLargeFerryFull(): boolean {
        return this.ferries.filter(f => f.size === FerrySize.large && f.isFull).length > 0;
    }

    get isAllFull(): boolean {
        return this.ferries.filter(f => f.isFull).length === this.totalFerry;
    }
}
