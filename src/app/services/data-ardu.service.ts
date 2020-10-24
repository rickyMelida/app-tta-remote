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

  constructor(private _http: HttpClient) {
    this.url = Global.url;
    this.urlPrueba = Global.urlPrueba;
  }

  // Recibimos la corriente de la carga
  recibirCorriente(): Observable<any> {
    return this._http.get(this.url + '?enviaDato');
  }

  // Enviamos una señal de stop
  stop(): Observable<any> {
    return this._http.get(this.url + '?OFFa');
  }

  // Enviamos una señal de arranque o start
  start(duration): Observable<any> {
    return this._http.get(this.url + '?start' + duration);
  }

  statusAnde(): Observable<any> {
    return this._http.get(this.url + '?estadoande');
  }

  statusGenerador(): Observable<any> {
    return this._http.get(this.url + '?estadogenerador');
  }

  recibirParametro(): Observable<any> {
    return this._http.get(this.urlPrueba + 'recibe');
  }

  reset():Observable<any> {
    return this._http.get(this.url + '?reset');
  }

}
