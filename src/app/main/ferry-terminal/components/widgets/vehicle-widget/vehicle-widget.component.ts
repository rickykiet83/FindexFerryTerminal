import { Component, OnInit } from '@angular/core';

import { FerryService } from 'app/shared/services/ferry.service';

@Component({
    selector: 'app-vehicle-widget',
    templateUrl: './vehicle-widget.component.html',
    styleUrls: ['./vehicle-widget.component.scss']
})
export class VehicleWidgetComponent implements OnInit {

    constructor(
        private ferryService: FerryService,
    ) { }

    ngOnInit(): void {
    }

}
