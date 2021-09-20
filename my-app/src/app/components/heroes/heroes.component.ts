import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService ) { }

  getHeroes(): void 
  {
    this.heroService.getHeroes()
                    .subscribe(heroes => this.heroes = heroes)
  }
  
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

}
