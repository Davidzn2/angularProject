import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent {
    lat = 19.5417775;
    lng = -99.2010177;
    lugares = null;
    constructor(private lugaresService: LugaresService){
      this.lugares = lugaresService.getLugares();
    }
}
