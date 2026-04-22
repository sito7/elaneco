import { Injectable, signal } from '@angular/core';

export type NavSection = 'inicio' | 'marca' | 'promociones' | 'distribuidores' | 'producto';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activeSection = signal<NavSection>('inicio');

  setActive(section: NavSection, targetId?: string) {
    this.activeSection.set(section);
    
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }
}
