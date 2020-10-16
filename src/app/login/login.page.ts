import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

interface Users {
  user: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {
  usuarios: Array<Users> =
    [
      {
        user: 'Admin',
        password: '000000'
      }
    ];


  dataForm: Users = {
    user: '',
    password: ''
  };

  constructor( private ruta: Router ) { }

  ngOnInit() {
  }

  login(datos) {
  }

  onsubmit() {
    if(this.dataForm.user === this.usuarios[0].user && this.dataForm.password === this.usuarios[0].password) {
      const user = this.dataForm.user;
      alert('Excelente');
      this.ruta.navigate(['/main']);
    }else {
      Swal.fire(
        'Ups!',
        'Usuario o Contraseña incorrecta!',
        'warning'
      );
    }

  }
}
