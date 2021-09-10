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
    size = VehicleSize;

    constructor(
        @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider
    ) { }

    ngOnInit(): void {

    }

    public getVehicle() {
        this.currentVehicle = this.vehicleProvider.GetVehicle();
        this.addVehicle(this.currentVehicle);
    }

    addVehicle(item: VehicleModel) {
        this.vehicles.push(item);
    }

    getVehicles(size: VehicleSize): VehicleModel[] {
        return this.vehicles.filter(v => v.category === size);
    }
}
