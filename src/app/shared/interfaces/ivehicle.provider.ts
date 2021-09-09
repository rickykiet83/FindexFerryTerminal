import { InjectionToken } from "@angular/core";
import { VehicleModel } from './../models/vehicle.model';

export const VEHICLE_PROVIDER = new InjectionToken("IVehicleProvider");

export interface IVehicleProvider {
    GetVehicle(): VehicleModel;
}
