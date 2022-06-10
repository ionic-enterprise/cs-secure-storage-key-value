import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  clearing = false;

  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {
  }

  async clear() {
    try {
      this.clearing = true;
      await this.dataStorage.clear();
    } catch (err) {
      alert(`Failed to clear ` + err);
    }
    this.clearing = false;
  }

}
