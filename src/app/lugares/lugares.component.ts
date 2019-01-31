import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent {
    lat = 19.5417775;
    lng = -99.2010177;
    lugares = [
        {
          nombre:'Lugar A',
          active: true,
          cercania: 1,
          distancia:10,
          id:1,
          plan: "pago"
        },
        {
          nombre:'Lugar B',
          active: true,
          cercania: 3,
          distancia:15,
          id:2,
          plan: "gratuito"
        },
        {
          nombre:'Lugar C',
          active: false,
          cercania: 2,
          distancia:20,
          id:3,
          plan: "gratuito"
        },
      ];
}
