import { Component, OnInit } from '@angular/core';

import { SaleService } from './../../../../../shared/services/sale.service';

@Component({
    selector: 'app-sale-widget',
    templateUrl: './sale-widget.component.html',
    styleUrls: ['./sale-widget.component.scss']
})
export class SaleWidgetComponent implements OnInit {

    constructor(
        private saleService: SaleService,
    ) { }

    ngOnInit(): void {
    }

    get workerProfit(): number {
        return this.saleService.workerProfit();
    }

    get sumOfSales(): number {
        return this.saleService.sumOfSales();
    }

    get totalTicket(): number {
        return this.saleService.totalTicket();
    }

    get terminalProfit(): number {
        return this.saleService.terminalProfit();
    }
}
