import { FerryModel } from "../models/ferry.model";
import { FerrySize } from "../enums/ferry.enum";
import { IVehicle } from "./vehicle.interface";
import { TicketModel } from './../models/ticket.model';
import { VehicleModel } from "../models/vehicle.model";

export interface ITerminalProvider {
    GetFerries(): FerryModel[];
    GetTickets(): TicketModel[];
    AddVehicle(item: IVehicle);
    GetVehicles(): VehicleModel[];
    terminalWorkerProfit: number;
    terminalProfit: number;
    totalFerry: number;
    isAllFull: boolean;
    GetFerriesBySize(size: FerrySize): FerryModel[];
}