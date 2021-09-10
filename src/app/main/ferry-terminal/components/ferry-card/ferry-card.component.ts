import { Component, Input, OnInit } from '@angular/core';

import { VehicleModel } from './../../../../shared/models/vehicle.model';

@Component({
    selector: 'app-ferry-card',
    templateUrl: './ferry-card.component.html',
    styleUrls: ['./ferry-card.component.scss']
})
export class FerryCardComponent implements OnInit {
    @Input() title: string = '';
    @Input() vehicles: VehicleModel[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    get totalItem(): number {
        return this.vehicles.length;
    }

}
