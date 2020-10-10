import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';

import { DisplayComponent } from "../component/display/display.component";

import { DataArduService } from '../services/data-ardu.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataArduService
  ],
  declarations: [
    MainPage,
    DisplayComponent
  ]
})
export class MainPageModule {}
