import { Component, OnInit } from '@angular/core';
import { DataArduService } from "../services/data-ardu.service";

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
    const boton: any = document.getElementById('boton');
    boton.oncontextmenu = this.disable();
  }

  start() {
    this._dataArdu.start().subscribe(
      res => {
        console.log('Seee!');
      },
      err => {
        console.log('Error!!');
      }
    )
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
}
