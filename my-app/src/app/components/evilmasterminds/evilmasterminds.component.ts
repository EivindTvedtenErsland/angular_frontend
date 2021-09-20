import { Component, OnInit } from '@angular/core';
import { Evilmastermind } from '../../interfaces/evilmastermind';

@Component({
  selector: 'app-evilmasterminds',
  templateUrl: './evilmasterminds.component.html',
  styleUrls: ['./evilmasterminds.component.css']
})
export class EvilmastermindsComponent implements OnInit {

  evil: Evilmastermind = {
    id: 69,
    name: "goblinmans"
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
