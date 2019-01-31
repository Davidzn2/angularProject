import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Square2';
  w = 9;
  y = 19;
  lat = 19.5417775;
  lng = -99.2010177;
  listo = false;
  contador = 0;
  nombre = "";
  lugares = [
    {
      nombre:'Lugar A',
      active: true,
      cercania: 1,
      distancia:10,
      plan: "pago"
    },
    {
      nombre:'Lugar B',
      active: true,
      cercania: 3,
      distancia:15,
      plan: "gratuito"
    },
    {
      nombre:'Lugar C',
      active: false,
      cercania: 2,
      distancia:20,
      plan: "gratuito"
    },
  ];
  
  constructor(){
    setTimeout(()=>{ 
      this.listo = true; 
    },3000)
  }
  count(){
    this.contador +=1;
  }

}
