import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { PlanningComponent } from '../planning/planning.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, AdminComponent, PlanningComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
