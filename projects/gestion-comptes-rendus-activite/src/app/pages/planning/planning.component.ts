import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SchedulerModule } from '../../components/scheduler/scheduler.module';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SchedulerModule],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.css',
})
export class PlanningComponent {}
