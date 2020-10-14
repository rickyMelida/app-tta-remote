import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataArduService {

  url: string;
  urlPrueba: string;

  constructor( private _http: HttpClient ) { 
    this.url = Global.url;
    this.urlPrueba = Global.urlPrueba;
  }

  recibirCorriente(): Observable<any> {
    
    return this._http.get(this.url + '?enviaDato');
  }
  stop():Observable<any> {
    return this._http.get(this.url + '?OFFa');
  }

  start():Observable<any> {
    return this._http.get(this.url + '?start');
  }

  recibirParametro(): Observable<any> {
    return this._http.get(this.urlPrueba + 'recibe');
  }


}
