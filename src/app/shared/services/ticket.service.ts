import { ITicketProvider } from '../interfaces/ticket.provider';
import { IVehicle } from '../interfaces/vehicle.interface';
import { Injectable } from '@angular/core';
import { TerminalService } from './terminal.service';
import { TicketModel } from '../models/ticket.model';

@Injectable()
export class TicketService implements ITicketProvider {

    private tickets: TicketModel[] = [];

    constructor(private terminalService: TerminalService) {
        if (this.terminalService.GetFerries().length === 0) {
            throw new Error('Terminal should have at lease one Ferry!');
        }
    }

    GenerateTicket(item: IVehicle) {
        const ticket = new TicketModel(item.type);
        this.tickets.push(ticket);
    }

    GetTickets(): TicketModel[] {
        return this.tickets;
    }

    get totalTicket(): number {
        return this.tickets.length;
    }

}
