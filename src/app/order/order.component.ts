import { Component, OnInit } from '@angular/core';
import { Girl } from '../girl';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
 export class OrderComponent implements OnInit {
    girls: Girl;
    constructor() { }

  ngOnInit() {
  }

}
