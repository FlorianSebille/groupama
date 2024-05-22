import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-router-button',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './router-button.component.html',
  styleUrl: './router-button.component.css',
})
export class RouterButtonComponent {
  pageName = 'home';

  constructor(private router: Router, elementRef: ElementRef<HTMLElement>) {
    this.pageName = elementRef.nativeElement.getAttribute('pageName') || 'home';
    console.log('pageName => ', this.pageName);
  }

  goToPage(): void {
    this.router.navigate([`${this.pageName}`]);
  }
}
