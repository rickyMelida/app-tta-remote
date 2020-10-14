import { Component, OnInit } from '@angular/core';
import { DataArduService } from "../services/data-ardu.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  providers: [DataArduService]
})
export class MainPage implements OnInit {
  datos: any;
  user: string;

  constructor( private _dataArdu: DataArduService ) { }

  ngOnInit() {
    this.user = 'Admin';
    this.datos = 0.0;
    this.getCorriente();
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

  getCorriente() {
    setInterval(() => {
      this._dataArdu.recibirCorriente().subscribe(
        res => {
          // console.log(`Recibe: ${res}`);
          this.datos = res;
        },
        err => {
          console.log('NO Recibio');
        }
      );
    }, 1000);

  }

}
