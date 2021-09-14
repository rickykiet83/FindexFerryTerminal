import { IVehicle } from "./vehicle.interface";
import { TicketModel } from "../models/ticket.model";

export interface ITicketProvider {
    GenerateTicket(item: IVehicle);
    GetTickets(): TicketModel[];
    totalTicket: number;
}