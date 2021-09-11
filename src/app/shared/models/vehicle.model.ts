import { VehicleSize, VehicleType } from "../enums/vehicle.enum";

import { BaseModel } from './base.model';
import { IVehicle } from "../interfaces/vehicle.interface";

export class VehicleModel extends BaseModel implements IVehicle {
    type: VehicleType;
    category: VehicleSize;
    constructor(type: VehicleType, category: VehicleSize) {
        super();
        this.type = type;
        this.category = category;
    }

    get typeName(): string {
        return VehicleType[this.type];
    }

    get categoryName(): string {
        return VehicleSize[this.category];
    }

    private get iconName(): string {
        return VehicleType[this.type] + '.png';
    }

    get iconUrl(): string {
        return 'assets/icons/vehicles/' + this.iconName;
    }
}
