import { Component, OnInit } from '@angular/core';
import {champs} from '../champions';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor() { }
  champions = champs;
  currentState = 'initial';

  ngOnInit(): void {
  }
  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }

}

