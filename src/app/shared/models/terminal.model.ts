import { FerryModel } from './ferry.model';
import { IFerry } from './../interfaces/ferry.interface';
import { ITerminal } from './../interfaces/terminal.interface';
import { ITicket } from './../interfaces/ticket.interface';
import { TicketModel } from './ticket.model';

export class TerminalModel implements ITerminal {
    tickets: ITicket[] = [];
    constructor(public ferries: IFerry[]) { }

    GetFerries(): FerryModel[] {
        return this.ferries.map(f => new FerryModel(f.title, f.capacity, f.size));
    }

    GetTickets(): TicketModel[] {
        return this.tickets.map(t => new TicketModel(t.vehicleType));
    }
}