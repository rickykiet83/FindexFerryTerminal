import { FerrySize } from './../../shared/enums/ferry.enum';
import { FerryService } from 'app/shared/services/ferry.service';
import { FerryModel } from './../../shared/models/ferry.model';
import { VehicleSize } from './../../shared/enums/vehicle.enum';
import { VehicleModel } from './../../shared/models/vehicle.model';
import { IVehicleProvider, VEHICLE_PROVIDER } from './../../shared/interfaces/ivehicle.provider';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-ferry-terminal',
    templateUrl: './ferry-terminal.component.html',
    styleUrls: ['./ferry-terminal.component.scss']
})
export class FerryTerminalComponent implements OnInit {

    currentVehicle: VehicleModel;
    vehicles: VehicleModel[] = [];
    ferries: FerryModel[] = [];

    constructor(
        @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider,
        public ferryService: FerryService
    ) {
        this.ferries = this.ferryService.GetFerries();
    }

    ngOnInit(): void { }

    public getVehicle() {
        this.currentVehicle = this.vehicleProvider.GetVehicle();
        this.addVehicle(this.currentVehicle);
    }

    addVehicle(item: VehicleModel) {
        this.ferryService.AddVehicle(item);
    }

    ferryStart(ferry: FerryModel) {
        this.ferryService.FerryStart(ferry.size);
    }

    get smallFerry(): FerryModel {
        return this.ferryService.GetFerry(FerrySize.small);
    }

    get largeFerry(): FerryModel {
        return this.ferryService.GetFerry(FerrySize.large);
    }
}
