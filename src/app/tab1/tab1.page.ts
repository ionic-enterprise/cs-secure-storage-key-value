import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Person } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  people$: Observable<Person[]>;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.people$ = this.apiService.getPeople();
  }

}
