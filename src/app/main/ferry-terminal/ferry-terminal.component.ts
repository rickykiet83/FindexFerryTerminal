import { TicketModel } from './../../shared/models/ticket.model';
import { Observable } from 'rxjs';
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
    ) {
    }

    ngOnInit(): void {
        this.ferries = this.ferryService.GetFerries();
    }

    public getVehicle() {
        if (this.ferryService.isAllFerryFull) return;
        this.currentVehicle = this.vehicleProvider.GetVehicle();
        this.addVehicle(this.currentVehicle);
    }

    addVehicle(item: VehicleModel) {
        this.ferryService.AddVehicle(item);
    }

    ferryStart(ferry: FerryModel) {
        this.ferryService.FerryStart(ferry.id);
    }

    get isAllFull() {
        return this.ferryService.isAllFerryFull;
    }

    get terminalProfit(): number {
        return this.ferryService.terminalProfit;
    }

    get workerProfit(): number {
        return this.ferryService.workerProfit;
    }

    get sumOfSales(): number {
        return this.ferryService.sumOfSales;
    }
}
