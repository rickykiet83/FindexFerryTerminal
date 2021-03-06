import { FerryModel } from "../models/ferry.model";
import { FerrySize } from "../enums/ferry.enum";
import { TicketModel } from './../models/ticket.model';

export interface ITerminalProvider {
    GetFerries(): FerryModel[];
    totalFerry: number;
    isAllFerryFull: boolean;
    GetFerriesBySize(size: FerrySize): FerryModel[];
}