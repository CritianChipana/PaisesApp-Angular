import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _spiUrl : String = 'https://restcountries.eu/rest/v2';

  get httpParams(  ){

    return new HttpParams()
    .set('fields','name;capital;alpha2Code;flag;population');
  }

  constructor( private http : HttpClient ) { }

  buscarPais( termino : string ) : Observable<Country[]> {



    const url = `${this._spiUrl}/name/${termino}`;

    return this.http.get<Country[]>( url,{ params: this.httpParams });
  }


  buscarCapital( termino : string):Observable<Country[]>{

    const url = `${this._spiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url,{ params: this.httpParams });
  }

  getPaisAlpha( id : string):Observable<Country>{

    const url = `${this._spiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }


  buscarRegion( region : string):Observable<Country[]>{




    const url = `${this._spiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

}
