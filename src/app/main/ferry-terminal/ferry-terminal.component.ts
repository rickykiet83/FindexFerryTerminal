import { FerryModel } from './../../shared/models/ferry.model';
import { FERRY_PROVIDER, IFerryProvider } from './../../shared/interfaces/iferry.provider';
import { SystemConstants } from './../../common/system.constants';
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
    waitingVehicleList: VehicleModel[] = [];
    size = VehicleSize;
    ferries: FerryModel[] = [];

    constructor(
        @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider,
        @Inject(FERRY_PROVIDER) private ferryProvider: IFerryProvider,
    ) {
        this.ferries = ferryProvider.GetFerries();
    }

    ngOnInit(): void {
    }

    public getVehicle() {
        this.currentVehicle = this.vehicleProvider.GetVehicle();

        if (this.canItemOnFerryBoard(this.currentVehicle)) {
            this.addVehicle(this.currentVehicle);
        } else {
            this.addVehicleToWaitingList(this.currentVehicle);
        }
    }

    canItemOnFerryBoard(vehicle: VehicleModel): boolean {
        const limit = vehicle.category === VehicleSize.small ? SystemConstants.TOTAL_ITEM_ON_SMALL_FERRY : SystemConstants.TOTAL_ITEM_ON_LARGE_FERRY;
        const totalItemOnFerry = this.vehicles.filter(v => v.category === vehicle.category).length;

        return totalItemOnFerry < limit;
    }

    addVehicle(item: VehicleModel) {
        this.vehicles.push(item);
    }

    addVehicleToWaitingList(item: VehicleModel) {
        this.waitingVehicleList.push(item);
    }

    get smallVehicles(): VehicleModel[] {
        return this.getVehicles(VehicleSize.small);
    }

    get largeVehicles(): VehicleModel[] {
        return this.getVehicles(VehicleSize.large);
    }

    private getVehicles(size: VehicleSize): VehicleModel[] {
        return this.vehicles.filter(v => v.category === size);
    }
}
