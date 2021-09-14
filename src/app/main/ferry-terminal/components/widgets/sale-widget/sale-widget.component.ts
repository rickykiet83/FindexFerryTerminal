import { Component, OnInit } from '@angular/core';

import { SaleService } from './../../../../../shared/services/sale.service';
import { TicketService } from './../../../../../shared/services/ticket.service';

@Component({
    selector: 'app-sale-widget',
    templateUrl: './sale-widget.component.html',
    styleUrls: ['./sale-widget.component.scss']
})
export class SaleWidgetComponent implements OnInit {

    constructor(
        private saleService: SaleService,
        private ticketService: TicketService,
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
        return this.ticketService.totalTicket;
    }

    get terminalProfit(): number {
        return this.saleService.terminalProfit();
    }
}
