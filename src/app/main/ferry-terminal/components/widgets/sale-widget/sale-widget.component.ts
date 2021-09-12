import { Component, OnInit } from '@angular/core';

import { FerryService } from 'app/shared/services/ferry.service';
import { TerminalService } from './../../../../../shared/services/terminal.service';

@Component({
    selector: 'app-sale-widget',
    templateUrl: './sale-widget.component.html',
    styleUrls: ['./sale-widget.component.scss']
})
export class SaleWidgetComponent implements OnInit {

    constructor(
        private ferryService: FerryService,
        private terminalService: TerminalService,
    ) { }

    ngOnInit(): void {
    }

    get terminalProfit(): number {
        return this.terminalService.terminalProfit;
    }

    get workerProfit(): number {
        return this.terminalService.workerProfit;
    }

    get sumOfSales(): number {
        return this.terminalService.sumOfSales;
    }

    get totalTicket(): number {
        return this.terminalService.totalTicket;
    }
}
