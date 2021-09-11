import { FerryService } from 'app/shared/services/ferry.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TerminalService {

    constructor(public ferryService: FerryService) { }
}
