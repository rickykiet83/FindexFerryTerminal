import { FerryTerminalComponent } from './ferry-terminal.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes = [
  {
    path: '',
    component: FerryTerminalComponent
  }
];

@NgModule({
  declarations: [FerryTerminalComponent],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule,
    MatButtonModule
  ]
})
export class FerryTerminalModule { }
