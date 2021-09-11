import { VehicleSize, VehicleType } from "../enums/vehicle.enum";

import { IVehicle } from "../interfaces/vehicle.interface";

export class VehicleModel implements IVehicle {
    type: VehicleType;
    category: VehicleSize;
    constructor(type: VehicleType, category: VehicleSize) {
        this.type = type;
        this.category = category;
    }

    get typeName(): string {
        return VehicleType[this.type];
    }

    get categoryName(): string {
        return VehicleSize[this.category];
    }

    get iconName(): string {
        return VehicleType[this.type] + '.png';
    }

    get iconUrl(): string {
        return 'assets/icons/vehicles/' + this.iconName;
    }
}
