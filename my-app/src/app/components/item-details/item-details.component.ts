import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  item: Item | undefined;
  favoriteColorControl = new FormControl('');

  getItem(): void {

    const id = String(this.route.snapshot.paramMap.get('id'));
    
    console.log(id);

    this.itemService.getItem(id)
                    .subscribe(item => this.item = item);
  }

  deleteItem(item: Item): void
  {
    this.itemService.deleteItem(item)
                      .subscribe(item => this.item = item);
    this.goBack();
  }
  
  goBack(): void {
    this.location.back();
  }
  
  ngOnInit(): void {
    this.getItem();
  }

}
