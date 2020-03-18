import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { champs } from '../champions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details = {
    id: null, name: '', image: '', skill: '', story: ''
  };
  champions = champs;
  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== 'null') {
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.details = this.champions.find(x => x.id === id );
    }
  }
}
