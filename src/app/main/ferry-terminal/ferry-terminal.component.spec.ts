import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FerryModel } from './../../shared/models/ferry.model';
import { FerryService } from 'app/shared/services/ferry.service';
import { FerrySize } from './../../shared/enums/ferry.enum';
import { FerryTerminalComponent } from './ferry-terminal.component';
import { TerminalService } from './../../shared/services/terminal.service';
import { VEHICLE_PROVIDER } from './../../shared/interfaces/ivehicle.provider';
import { VehicleService } from './../../shared/services/vehicle.service';

describe('FerryTerminalComponent', () => {
    let component: FerryTerminalComponent;
    let fixture: ComponentFixture<FerryTerminalComponent>;
    let el: DebugElement;
    let service: any;

    const ferries: FerryModel[] = [
        new FerryModel('Small', 6, FerrySize.small),
        new FerryModel('Large', 8, FerrySize.large),
    ];

    beforeEach(async () => {
        const ferryServiceSpy = jasmine.createSpyObj('FerryService', ['AddVehicle', 'FerryStart'])
        const terminalServiceSpy = jasmine.createSpyObj('TerminalService', ['GetFerries'])
        await TestBed.configureTestingModule({
            declarations: [FerryTerminalComponent],
            providers: [

                { provide: TerminalService, useValue: terminalServiceSpy },
                { provide: FerryService, useValue: ferryServiceSpy },
                { provide: VEHICLE_PROVIDER, useClass: VehicleService },
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(FerryTerminalComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
                el = fixture.debugElement;
                service = TestBed.inject(FerryService);
            });
    });

    beforeEach(() => {
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("should display Get Vehicle button", () => {
        const button = el.query(By.css('#get-vehicle'));
        expect(button).toBeTruthy();
    });
});
