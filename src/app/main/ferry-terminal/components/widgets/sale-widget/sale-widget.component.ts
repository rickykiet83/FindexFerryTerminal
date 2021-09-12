import { Component, OnInit } from '@angular/core';

import { FerryService } from 'app/shared/services/ferry.service';

@Component({
    selector: 'app-sale-widget',
    templateUrl: './sale-widget.component.html',
    styleUrls: ['./sale-widget.component.scss']
})
export class SaleWidgetComponent implements OnInit {

    constructor(
        private ferryService: FerryService,
    ) { }

    ngOnInit(): void {
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

    get totalTicket(): number {
        return this.ferryService.totalTicket;
    }

}
