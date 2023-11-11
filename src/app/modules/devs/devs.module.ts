import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevsRoutingModule } from './devs-routing.module';
import { DevListComponent } from './pages/dev-list/dev-list.component';


@NgModule({
  declarations: [
    DevListComponent
  ],
  imports: [
    CommonModule,
    DevsRoutingModule
  ]
})
export class DevsModule { }
