import { FerryService } from 'app/shared/services/ferry.service';
import { LargeFerryService } from './../../shared/services/large-ferry.service';
import { SmallFerryService } from './../../shared/services/small-ferry.service';
import { BaseFerryService } from '../../shared/services/base-ferry.service';
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
        private ferryService: FerryService
    ) {
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
        const result = this.ferryService.AddVehicle(item);
        if (!result) this.addVehicleToWaitingList(item);
    }

    addVehicleToWaitingList(item: VehicleModel) {
        this.waitingVehicleList.push(item);
    }

    get vehiclesOnSmallFerry(): VehicleModel[] {
        return this.ferryService.smallFerryService.GetVehicles();
    }

    get vehiclesOnLargeFerry(): VehicleModel[] {
        return this.ferryService.largeFerryService.GetVehicles();
    }

}
