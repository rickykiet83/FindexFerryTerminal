import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { AnalyticsComponent } from './analytics.component';
import { AnalyticsService } from './analytics.service';
import { ChartsModule } from 'ng2-charts';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
    {
        path: '**',
        component: AnalyticsComponent,
        resolve: {
            data: AnalyticsService
        }
    }
];


@NgModule({
    declarations: [AnalyticsComponent],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),
        ChartsModule,
        NgxChartsModule,

        FuseSharedModule,
        FuseWidgetModule

    ],
    providers: [
        AnalyticsService
    ]
})
export class AnalyticsModule { }
