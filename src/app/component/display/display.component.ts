import { Component, OnInit, Input } from '@angular/core';
import { DataArduService } from '../../services/data-ardu.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {

  datos: number;

  constructor( private _dataArdu: DataArduService ) { }

  ngOnInit() {
    this.datos = 0.0;
    // this.getCorriente();
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
