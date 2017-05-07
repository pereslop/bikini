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
        this.selectedGirl = this.girls[0];
        this.girls[0].selected = true;
      });
  };
    getSelectedGirl(girlSelected: Girl) {
    this.selectedGirl = girlSelected;
    this.selectedGirlShow();
  }

  selectedGirlShow(){
      for (let i = 0; i < this.girls.length; i++) {
        if (this.girls[i].name === this.selectedGirl.name) {
          this.girls[i].selected  = true
        } else {
          this.girls[i].selected = false;
        }
    }
  }
}
