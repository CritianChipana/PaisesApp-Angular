import { Component  } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayerror : boolean = false;
  paises  : Country[] = [];
  paisesSugeridos : Country[] = [] 


  constructor( private paisService : PaisService ){}

  buscar ( termino : string ){
    this.hayerror = false
    this.termino = termino;

    this.paisService.buscarPais( termino )
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

  sugerencias( termino : any ){

    this.hayerror = false;
    // this.termino = termino
    // this.buscar(termino);
    //TODO:  CREAR SUGERENCIAS

    this.paisService.buscarPais( termino )
      .subscribe( 
          paises => this.paisesSugeridos = paises.splice(0,5) );

  }


}
