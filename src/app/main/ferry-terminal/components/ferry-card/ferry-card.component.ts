import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FerryModel } from './../../../../shared/models/ferry.model';
import { FerryService } from 'app/shared/services/ferry.service';

@Component({
    selector: 'app-ferry-card',
    templateUrl: './ferry-card.component.html',
    styleUrls: ['./ferry-card.component.scss']
})
export class FerryCardComponent implements OnInit {
    @Input() ferry: FerryModel;
    @Output() startFerry: EventEmitter<FerryModel> = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }

    get totalItem(): number {
        return this.ferry?.totalVehicle;
    }

    ferryStart() {
        this.startFerry.emit(this.ferry);
    }

}
