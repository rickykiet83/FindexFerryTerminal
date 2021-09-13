import { Injectable } from '@angular/core';
import { TerminalService } from './terminal.service';

@Injectable()
export class SaleService {

    constructor(private terminalService: TerminalService) {
        if (this.terminalService.GetFerries().length === 0) {
            throw new Error('Terminal should have at lease one Ferry!');
        }
    }

    get terminalProfit(): number {
        if (this.terminalService.GetTickets().length > 0) {
            const total = this.terminalService.GetTickets().map(t => t.cost)
                .reduce((accumulator, currentValue) => accumulator + (currentValue * this.terminalService.terminalBonus), 0);
            return +total.toFixed(2);
        }
        return 0;
    }

    get workerProfit(): number {
        if (this.terminalService.GetTickets().length > 0) {
            const total = this.terminalService.GetTickets().map(t => t.cost)
                .reduce((accumulator, currentValue) => accumulator + (currentValue * this.terminalService.terminalWorkerBonus), 0);
            return +total.toFixed(2);
        }
        return 0;
    }

    get sumOfSales(): number {
        if (this.terminalService.GetTickets().length > 0) {
            const total = this.terminalService.GetTickets().map(t => t.cost)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            return total;
        }
        return 0;
    }

    get totalTicket() {
        return this.terminalService.totalTicket;
    }
}
