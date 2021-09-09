import { VehicleModel } from './../../shared/models/vehicle.model';
import { IVehicleProvider, VEHICLE_PROVIDER } from '../../shared/interfaces/IVehicle.provider';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-ferry-terminal',
    templateUrl: './ferry-terminal.component.html',
    styleUrls: ['./ferry-terminal.component.scss']
})
export class FerryTerminalComponent implements OnInit {

    currentVehicle: VehicleModel;

    constructor(
        @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider
    ) { }

    ngOnInit(): void {

    }

    getVehicle() {
        this.currentVehicle = this.vehicleProvider.GetVehicle();
        console.log(this.currentVehicle);
    }
}
