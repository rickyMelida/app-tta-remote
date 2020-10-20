import { Component, OnInit } from '@angular/core';
import { DataArduService } from "../services/data-ardu.service";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  providers: [DataArduService]
})
export class MainPage implements OnInit {
  user: string;
  status_ande: boolean;
  status_generador: boolean;
  estado: string;

  data: any = {
    name: "button",
    status: "estado_boton"
  };

  constructor(private _dataArdu: DataArduService) { }

  ngOnInit() {
    this.user = 'Admin';
    this.status_ande = false;
    this.status_generador = true;
    // const boton: any = document.getElementById('boton');
    // boton.oncontextmenu = this.disable();
    // this.estadoAnde();
  }

  start() {
    if (!this.status_ande) {

      this._dataArdu.start().subscribe(
        res => {
          console.log('Seee!');
          console.log(res);
        },
        err => {
          console.log('Error!!');
        }
      );
    }else {
      Swal.fire(
        'Ups!',
        'No puedes arrancar generador por que hay tension de Ande!',
        'warning'
      );
    }
  }

  disable() {
    return false;
  }

  manual_on(event) {
    this.estado = "Prende";
    console.log(event.type);
  }

  manual_off(event) {
    this.estado = "Apaga";
    console.log(event.type);
  }

  estadoAnde() {
    setInterval(() => {

      this._dataArdu.status().subscribe(
        res => {
          if(res === 1) {
            this.status_ande = res;
            this.status_generador = !res;
            console.log("Estas con Ande");
          }else {
            this.status_ande = res;
            this.status_generador = !res;
            console.log("NO estas con Ande");

          }
        },

        err => {
          console.log("Hay un error al recibir la señal de Ande");
        }
      )
    }, 1000);
  }
}
