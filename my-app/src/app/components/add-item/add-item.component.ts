import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddItem } from 'src/app/interfaces/additem';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  name: string = "";
  description : string = "";
  price: number = 0;

  newItem?: AddItem;

  constructor(private itemService: ItemService) 
  { 
    
  }

  addItemForm: FormGroup = new FormGroup(
    {
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('')
    });

  ngOnInit(): void 
  {

  }

  onSubmit(): void 
  {
    console.warn(this.addItemForm.value);
    if (!this.addItemForm.valid)
    {
      const newItem : AddItem = 
      {
        name: this.addItemForm.value.name,
        description: this.addItemForm.value.description,
        price: this.addItemForm.value.price
      }

      console.warn(newItem);

      this.itemService.postItem(newItem)
                      .subscribe(newItem => this.newItem = newItem,
                        (response) => console.log(response))
    }
  }
}
