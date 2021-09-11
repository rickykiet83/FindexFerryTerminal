import * as shortId from 'shortid';

import { ITicket } from './../interfaces/ticket.interface';
import { VehicleType } from '../enums/vehicle.enum';
export class TicketModel implements ITicket {
    vehicleType: VehicleType;
    private _id: string = shortId.generate();
    constructor(type: VehicleType) {
        this.vehicleType = type;
    }

    get id(): string {
        return this._id;
    }

    get cost(): number {
        switch (this.vehicleType) {
            case VehicleType.car:
                return 5;
            case VehicleType.bus:
                return 15;
            case VehicleType.van:
                return 7.5;
            case VehicleType.truck:
                return 10;

            default:
                return 0;
        }
    }
}