import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares = [
    {
      nombre:'Lugar A',
      active: true,
      cercania: 1,
      distancia:10,
      id:1,
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis placeat dolorem dignissimos ipsum nesciunt perspiciatis. Sunt ipsum voluptates odio accusamus corporis, esse quos pariatur aperiam vitae similique reiciendis soluta.",
      plan: "pago"
    },
    {
      nombre:'Lugar B',
      active: true,
      cercania: 3,
      distancia:15,
      id:2,
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis placeat dolorem dignissimos ipsum nesciunt perspiciatis. Sunt ipsum voluptates odio accusamus corporis, esse quos pariatur aperiam vitae similique reiciendis soluta.",
      plan: "gratuito"
    },
    {
      nombre:'Lugar C',
      active: false,
      cercania: 2,
      distancia:20,
      id:3,
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis placeat dolorem dignissimos ipsum nesciunt perspiciatis. Sunt ipsum voluptates odio accusamus corporis, esse quos pariatur aperiam vitae similique reiciendis soluta.",
      plan: "gratuito"
    },
  ];
  id=null;
  lugar = {};
    constructor(private route: ActivatedRoute){
      console.log(this.route.snapshot.params['id']);
      console.log(this.route.snapshot.queryParams);
      this.id = this.route.snapshot.params['id'];
      this.lugar = this.buscarLugar();
      console.log(this.buscarLugar());
    }
    buscarLugar(){
      return this.lugares.filter((lugar)=> {return lugar.id ==this.id})[0] || null;
    }
}
