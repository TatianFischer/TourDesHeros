import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES:  Hero[] = [
  {id: 1,     name : 'Wonder Woman'},
  {id: 2,     name : 'SuperGirl'},
  {id: 3,     name : 'BatGirl'},
  {id: 4,     name : 'Harley Quinn'},
  {id: 5,     name : 'HawkGirl'},
  {id: 6,     name : 'Poison Evil'},
  {id: 7,     name : 'Bumble Bee'},
  {id: 8,     name : 'Katana'},
  {id: 9,     name : 'Barry Allen'},
  {id: 10,    name : 'Hal Jordan'}
];

@Component({
    moduleId:     module.id, /*Change la racine du projet : maintenant le dossier app*/
    selector:      'my-app',
    templateUrl:   "app.component.html",
    styleUrls:     ['app.component.css']
})
export class AppComponent  {
	title		    = 	"Tour of Heros";
	heroes          =    HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
