import { FerryCardComponent } from './components/ferry-card/ferry-card.component';
import { FerryService } from 'app/shared/services/ferry.service';
import { FerryTerminalComponent } from './ferry-terminal.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SaleWidgetComponent } from './components/widgets/sale-widget/sale-widget.component';
import { TerminalService } from './../../shared/services/terminal.service';
import { TranslateModule } from '@ngx-translate/core';
import { VEHICLE_PROVIDER } from './../../shared/interfaces/ivehicle.provider';
import { VehicleService } from './../../shared/services/vehicle.service';
const routes = [
    {
        path: '',
        component: FerryTerminalComponent
    }
];

@NgModule({
    declarations: [FerryTerminalComponent, FerryCardComponent, SaleWidgetComponent],
    imports: [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule
    ],
    providers: [
        FerryService, TerminalService,
        { provide: VEHICLE_PROVIDER, useClass: VehicleService },
    ],

})
export class FerryTerminalModule { }
