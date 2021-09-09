import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FerryTerminalComponent } from "./ferryterminal/ferry.terminal.component";
import { HardcodedVehicleService } from "../services/hardcoded.vehicle.service";
import { NgModule } from "@angular/core";
import { VEHICLE_PROVIDER } from "src/interfaces/ivehicle.provider";

@NgModule({
  declarations: [AppComponent, FerryTerminalComponent],
  imports: [BrowserModule],
  providers: [{ provide: VEHICLE_PROVIDER, useClass: HardcodedVehicleService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
