import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SchedulerComponent } from './scheduler.component';
import { DayPilotModule } from 'daypilot-pro-angular';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { getReducers, REDUCER_TOKEN } from '../../stores';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DayPilotModule,
    StoreModule.forRoot(REDUCER_TOKEN),
  ],
  declarations: [SchedulerComponent],
  exports: [SchedulerComponent],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers,
    },
  ],
})
export class SchedulerModule {}
