import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Planet } from '../models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  planets$: Observable<Planet[]>;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.planets$ = this.apiService.getPlanets();
  }

}
