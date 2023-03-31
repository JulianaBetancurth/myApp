import { Component, OnInit } from '@angular/core';
import { ServicioTareaService } from 'src/app/servicio-tarea.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent  implements OnInit {
  [x: string]: any;

  allCharacters: any  

  constructor(private randmService: ServicioTareaService,) { }

  ngOnInit() {}

  
}
