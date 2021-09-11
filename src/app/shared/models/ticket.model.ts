import { BaseModel } from './base.model';
import { ITicket } from './../interfaces/ticket.interface';
import { VehicleType } from '../enums/vehicle.enum';

export class TicketModel extends BaseModel implements ITicket {
    vehicleType: VehicleType;
    constructor(type: VehicleType) {
        super();
        this.vehicleType = type;
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