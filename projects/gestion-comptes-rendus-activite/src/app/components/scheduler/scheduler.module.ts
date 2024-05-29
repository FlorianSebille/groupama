import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SchedulerComponent } from './scheduler.component';
import { DayPilotModule } from 'daypilot-pro-angular';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, DayPilotModule],
  declarations: [SchedulerComponent],
  exports: [SchedulerComponent],
  providers: [],
})
export class SchedulerModule {}
