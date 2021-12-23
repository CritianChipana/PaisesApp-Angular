import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

 
  termino: string = '';
  hayerror : boolean = false;
  paises  : Country[] = [];


  constructor( private paisService : PaisService ){}

  buscar ( termino : string ){
    this.hayerror = false
    this.termino = termino;

    this.paisService.buscarCapital( termino )
      .subscribe( ( paises ) =>{
        // Imprimimos en consola la respuesta de observable
        console.log(paises);
        this.paises = paises;
        

      },( error )=>{
        // Cuando tengamos el error, limpiamos la lista
        this.hayerror = true;
        this.paises = []; 
      });

  }

}
