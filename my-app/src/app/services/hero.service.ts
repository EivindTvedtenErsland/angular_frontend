import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../interfaces/hero'
import { HEROES } from '../hero-array';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>
  {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero>
  {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero: ${id}`);

    return of(hero);
  }
}
