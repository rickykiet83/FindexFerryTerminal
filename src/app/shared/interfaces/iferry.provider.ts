import { FerryModel } from './../models/ferry.model';
import { InjectionToken } from "@angular/core";

export const FERRY_PROVIDER = new InjectionToken("IFerryProvider");

export interface IFerryProvider {
    GetFerries(): FerryModel[];
}
