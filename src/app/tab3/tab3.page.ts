import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Ship } from '../models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  ships$: Observable<Ship[]>;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.ships$ = this.apiService.getShips();
  }

}

