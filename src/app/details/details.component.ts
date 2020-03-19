import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Team } from '../champions';
import { trigger, transition, animate, style, state } from '@angular/animations';
import {slideInOutAnimation} from '../_animations';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations: [trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition('void <=> *', [animate('2s ease-in-out')])
  ]), slideInOutAnimation]
})
export class DetailsComponent implements OnInit {
// tslint:disable-next-line:max-line-length
details = { id: null, name: '',    image: '', location: '', stadium:    '', capacity:    null, manager: '', captain: '', lat: null, lng: null };
  teams = Team;
  showMap(lat: any, lng: any) {
  this.router.navigate(['/maps', lat, lng]);
}

  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== 'null') {
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.details = this.teams.find(x => x.id === id );
    }
  }
}
