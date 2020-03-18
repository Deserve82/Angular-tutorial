import { Component, OnInit } from '@angular/core';
import { Team } from '../champions';
import { trigger, transition, animate, style , state } from '@angular/animations'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition('void <=> *', [animate('1s ease-in-out')])
  ])]
})
export class ListComponent implements OnInit {
  constructor() { }
  teams = Team;
  currentState = 'initial';

  ngOnInit(): void {
  }
  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }

}

