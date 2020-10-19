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

  //Recibimos la señal de la Ande
  signalAnde(): Observable<any> {
    return this._http.get(this.url + "?ande");
  }

  //Recibimos señal del generador
  signalGenerador(): Observable<any> {
    return this._http.get(this.url + "?ande");
  }

  // Recibimos la corriente de la carga
  recibirCorriente(): Observable<any> {
    return this._http.get(this.url + '?enviaDato');
  }

  //Enviamos una señal de stop
  stop():Observable<any> {
    return this._http.get(this.url + '?OFFa');
  }

  // Enviamos una señal de arranque o start
  start():Observable<any> {
    return this._http.get(this.url + '?start');
  }

  status():Observable<any> {
    return this._http.get(this.url + '?estado');
  }
  
  manualoff():Observable<any> {
    return this._http.get(this.url + '?manualoff');
  }

  manualon():Observable<any> {
    return this._http.get(this.url + '?manualon');
  }

  recibirParametro(): Observable<any> {
    return this._http.get(this.urlPrueba + 'recibe');
  }


}
