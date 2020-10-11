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
  }

  getData() {
   this._dataArdu.stop().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(`Hubo un err`);
      }
    );
  }

  run() {
    this._dataArdu.run().subscribe(
      res => {
        console.log('Seee!');
      },
      err => {
        console.log('Error!!');
      }
    )
  }

  recibe() {
    this._dataArdu.recibirCorriente().subscribe(
      res => {
        console.log(res.dato);
      },
      err => {
        console.log('NO Recibio');
      }
    )
    // console.log('Recibe')
  }

}
