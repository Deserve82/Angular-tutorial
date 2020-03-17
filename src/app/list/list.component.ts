import { Component, OnInit } from '@angular/core';
import {champs} from '../champions';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  champions = champs;
  constructor() { }

  ngOnInit(): void {
  }

}

