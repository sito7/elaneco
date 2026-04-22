import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationService } from './services/navigation.service';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { ProductInfo } from './components/product-info/product-info';
import { EcoVision } from './components/eco-vision/eco-vision';
import { PlanRenove } from './components/plan-renove/plan-renove';
import { B2BForm } from './components/b2b-form/b2b-form';
import { Distribution } from './components/distribution/distribution';
import { Footer } from './components/footer/footer';
import { Producto } from './components/producto/producto';
import { EventGallery } from './components/event-gallery/event-gallery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, Hero, ProductInfo, Producto, PlanRenove, EcoVision, B2BForm, Distribution, Footer, EventGallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  public nav = inject(NavigationService);
}