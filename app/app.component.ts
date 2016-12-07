import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';



@Component({
    moduleId:     module.id, /*Change la racine du projet : maintenant le dossier app*/
    selector:      'my-app',
    templateUrl:   "app.component.html",
    styleUrls:     ['app.component.css'],
    providers:     [HeroService]
})
export class AppComponent  implements OnInit{
	title		    = 	"Tour of Heros";
	heroes          :     Hero[];
    selectedHero    :     Hero;

    constructor (private heroService : HeroService) {}

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
