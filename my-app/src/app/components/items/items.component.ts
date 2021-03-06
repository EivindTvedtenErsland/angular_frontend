import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../interfaces/item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(
    private itemService: ItemService,
    private location: Location
    ) { }

  items: Item[] = [];

  GetItems() {
    this.itemService.getItems()
                    .subscribe(items => this.items = items);
  }

  ngOnInit(): void {
    this.GetItems();
  }
}
