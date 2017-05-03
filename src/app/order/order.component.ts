import { Component, OnInit } from '@angular/core';
import { Girl } from '../girl';
import { GIRLS } from '../mack-girls';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
 export class OrderComponent implements OnInit {
  girls: Girl[] = GIRLS;
  title = 'bikini';
  constructor() { };
  ngOnInit() { }

}
