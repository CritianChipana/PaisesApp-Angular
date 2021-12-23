import { Country } from './../../interfaces/pais.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  
  pais!: Country;
  
  constructor( 
    private activateRoute : ActivatedRoute,
    private paisService : PaisService
     ) {  }

  ngOnInit(): void {


    //? Primera forma de Buscar por ID
    // this.activateRoute.params
    //   .subscribe( ({id}) =>{
    //     console.log(id)
    //     this.paisService.getPaisAlpha( id )
    //       .subscribe( pais =>{
    //         console.log(pais)
    //       } )
    //   });

    //? Segunda forma de Buscar por ID
    this.activateRoute.params
      .pipe(
        switchMap( (param) =>this.paisService.getPaisAlpha( param.id )  ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );


  }

}
