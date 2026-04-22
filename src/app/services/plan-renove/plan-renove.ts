import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanRenoveService {

  constructor() { }

  submitReserve(academia: string, email: string) : Observable<{message: string}> {
    // Simulate API Call
    return of({message: '¡Gracias! Tu pack de reciclaje ha sido reservado correctamente.'}).pipe(
      delay(1000)
    );
  }
}
