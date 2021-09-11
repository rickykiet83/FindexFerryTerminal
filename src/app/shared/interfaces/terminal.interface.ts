import { FerryModel } from "../models/ferry.model";
import { IVehicle } from "./vehicle.interface";
import { TicketModel } from './../models/ticket.model';

export interface ITerminal {
    totalFerry: number;
    isAllFull: boolean;
    GetFerries(): FerryModel[];
    GetTickets(): TicketModel[];
}