import { Injectable } from "@angular/core";

@Injectable()
export class LugaresService{    
    lugares:any = [
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
      public getLugares(){
          return this.lugares;
      }
      public buscarLugar(id){
        return this.lugares.filter((lugar)=> {return lugar.id = id})[0] || null;
      }
}