import { Component, OnInit, signal, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  mostrarAnimacion = signal(false);
  mostrarAnimacionSecundaria = signal(false);
  public nav = inject(NavigationService);

  ngOnInit() {
    setTimeout(() => this.mostrarAnimacion.set(true), 150);
    setTimeout(() => this.mostrarAnimacionSecundaria.set(true), 500);
  }
}
