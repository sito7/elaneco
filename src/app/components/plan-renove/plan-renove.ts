import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-renove',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-renove.html',
  styleUrl: './plan-renove.css',
})
export class PlanRenove {
  mostrarPlanRenove = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    if (scrollPos > 800) { 
      this.mostrarPlanRenove.set(true);
    }
  }
}
