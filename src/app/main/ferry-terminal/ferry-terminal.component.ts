import { TerminalService } from './../../shared/services/terminal.service';
import { FerryService } from 'app/shared/services/ferry.service';
import { FerryModel } from './../../shared/models/ferry.model';
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
        private ferryService: FerryService,
        private terminalService: TerminalService,
    ) {
    }

    ngOnInit(): void {
        this.ferries = this.terminalService.GetFerries();
    }

    public getVehicle() {
        if (this.isAllFull) return;
        this.currentVehicle = this.vehicleProvider.GetVehicle();
        this.ferryService.AddVehicle(this.currentVehicle);
    }

    ferryStart(ferry: FerryModel) {
        this.ferryService.FerryStart(ferry.id);
    }

    get isAllFull() {
        return this.terminalService.isAllFerryFull;
    }
}
