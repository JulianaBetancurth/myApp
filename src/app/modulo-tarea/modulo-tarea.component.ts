import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-modulo-tarea',
  templateUrl: './modulo-tarea.component.html',
  styleUrls: ['./modulo-tarea.component.scss'],
})
export class ModuloTareaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
@NgModule{{

  imports: [BrowserModule, IonicModule.forRoot(), AppRouttingModule.HttpClientModule]
  
}}