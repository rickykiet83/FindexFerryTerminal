import { IFerry } from './ferry.interface';
import { ITicket } from './ticket.interface';
export interface ITerminal {
    ferries: IFerry[];
    tickets: ITicket[];
}