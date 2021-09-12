import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TerminalService } from './../../../shared/services/terminal.service';
import { TicketModel } from './../../../shared/models/ticket.model';

@Injectable()
export class AnalyticsService {
    constructor(
        private terminalService: TerminalService,
    ) {
    }
}
