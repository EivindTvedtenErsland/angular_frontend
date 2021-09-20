import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  items: Item[] = [];

  constructor(private heroService: HeroService, private itemService: ItemService) { }

  ngOnInit() {
    this.getHeroes();
    this.getItems();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }
}
