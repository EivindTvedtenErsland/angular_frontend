import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { DetailsButtonComponent } from '../details-button/details-button.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  
  hero: Hero | undefined;
  faCoffee = faCoffee;
  
  getHero(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));
   console.log(id);
   this.heroService.getHero(id)
                    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  
  ngOnInit(): void {
    this.getHero();
  }

}
