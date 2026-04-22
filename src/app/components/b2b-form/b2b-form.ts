import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b2b-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './b2b-form.html',
  styleUrl: './b2b-form.css',
})
export class B2BForm {
  academia = '';
  director = '';
  email = '';
  volumen = '';
  
  isSubmitting = signal(false);
  successMessage = signal('');

  onSubmit() {
    if(!this.academia || !this.email || !this.director) return;

    this.isSubmitting.set(true);
    
    // Simulate API request
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.successMessage.set('¡Solicitud enviada! Nos pondremos en contacto contigo pronto.');
      this.academia = '';
      this.director = '';
      this.email = '';
      this.volumen = '';
    }, 1200);
  }
}
