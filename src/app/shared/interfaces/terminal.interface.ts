import { FerryModel } from "../models/ferry.model";
import { TicketModel } from './../models/ticket.model';
import { VehicleModel } from './../models/vehicle.model';

export interface ITerminal {
    totalFerry: number;
    isAllFull: boolean;
    GetFerries(): FerryModel[];
    GetTickets(): TicketModel[];
    GetVehicles(): VehicleModel[];
}