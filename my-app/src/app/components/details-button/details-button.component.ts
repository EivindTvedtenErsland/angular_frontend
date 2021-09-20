import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.css']
})

export class DetailsButtonComponent implements OnInit {

  @Input() text?: string;
  @Input() color?: string;
  @Input() backgroundColor?: string;

  @Input() iconColor?: string;
  @Input() iconBackground?: string;

  @Output() clickEvent = new EventEmitter();
  
  faArrowDown = faArrowDown;
  faCross = faCross;
  faSave = faSave;

  constructor() { }

  ngOnInit(): void {
    this.iconColor = "white";
    this.iconBackground = "black";
  }

  onClick() {
    this.clickEvent.emit();
  }
}
