import { Component, OnInit } from '@angular/core';

import { Girl } from './girl';
import { GirlService} from './girl.servise';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [GirlService]
})
export class OrderComponent implements OnInit {
  selectedGirl: Girl;
  girls: Girl[] = [];
  constructor(private girlService: GirlService ) { };
  ngOnInit() {
    this.girlService.getGirls()
      .subscribe((data) => {
        this.girls = data.girls;
      });
  };
    getSelectedGirl(girlSelected: Girl) {
    this.selectedGirl = girlSelected;
  }
}
