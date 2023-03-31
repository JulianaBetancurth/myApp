import { Component, OnInit } from '@angular/core';
import { AllCharactersComponent } from '../sahred/all-characters/all-characters.component';
//import { ServicioTareaServices } from ;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
allCharacters: any;

  constructor(
    private servicioJuli: AllCharactersComponent 
  ) {}

  ngOnInit() {
    this.servicioJuli['getAllCharacters']().then( (res: any) => {
      this.allCharacters = res;
      console.log (this.allCharacters);
    });
  }


}
