import { ISale } from './../interfaces/sale.interface';
import { Injectable } from '@angular/core';
import { TerminalService } from './terminal.service';
import { TicketService } from './ticket.service';

@Injectable()
export class SaleService implements ISale {

    constructor(
        private terminalService: TerminalService,
        private ticketService: TicketService,
    ) {
        if (this.terminalService.GetFerries().length === 0) {
            throw new Error('Terminal should have at lease one Ferry!');
        }
    }

    terminalProfit(): number {
        if (this.ticketService.GetTickets().length > 0) {
            const total = this.ticketService.GetTickets().map(t => t.cost)
                .reduce((accumulator, currentValue) => accumulator + (currentValue * this.terminalService.terminalBonus), 0);
            return +total.toFixed(2);
        }
        return 0;
    }

    workerProfit(): number {
        if (this.ticketService.GetTickets().length > 0) {
            const total = this.ticketService.GetTickets().map(t => t.cost)
                .reduce((accumulator, currentValue) => accumulator + (currentValue * this.terminalService.terminalWorkerBonus), 0);
            return +total.toFixed(2);
        }
        return 0;
    }

    sumOfSales(): number {
        if (this.ticketService.GetTickets().length > 0) {
            const total = this.ticketService.GetTickets().map(t => t.cost)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            return total;
        }
        return 0;
    }

    totalTicket() {
        return this.ticketService.totalTicket;
    }
}
