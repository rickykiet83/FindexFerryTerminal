import { FerryModel } from '../models/ferry.model';
import { FerrySize } from '../enums/ferry.enum';
import { ITerminalProvider } from './../interfaces/terminal.interface';
import { IVehicle } from './../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { TicketModel } from '../models/ticket.model';
import { VehicleModel } from '../models/vehicle.model';

@Injectable()
export class TerminalService implements ITerminalProvider {

    private smallFerry = new FerryModel('Small Ferry', 8, FerrySize.small);
    private largeFerry = new FerryModel('Large Ferry', 6, FerrySize.large);
    private ferries: FerryModel[] = [];
    private tickets: TicketModel[] = [];
    private terminalWorkerBonus = 0.1;
    private terminalBonus = 0.9;
    private vehicles: IVehicle[] = [];

    constructor() {
        this.initFerries();
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

    AddVehicle(item: IVehicle) {
        this.vehicles.push(item);
        this.GenerateTicket(item);
    }

    GetVehicles(): VehicleModel[] {
        return this.vehicles.map(v => new VehicleModel(v.type, v.category));
    }

    private GenerateTicket(item: IVehicle) {
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
                .reduce((accumulator, currentValue) => accumulator + (currentValue * this.terminalBonus), 0);
            return +total.toFixed(2);
        }
        return 0;
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
