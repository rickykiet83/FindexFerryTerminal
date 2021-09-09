import { IVehicleProvider, VehicleSummary, VEHICLE_PROVIDER } from './../../shared/interfaces/ivehicle.provider';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferry-terminal',
  templateUrl: './ferry-terminal.component.html',
  styleUrls: ['./ferry-terminal.component.scss']
})
export class FerryTerminalComponent implements OnInit {

  currentVehicle: VehicleSummary;

  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider
  ) { }

  ngOnInit(): void {

  }

  public getVehicle() {
    this.currentVehicle = this.vehicleProvider.GetVehicle();
    console.log(this.currentVehicle);
  }
}
