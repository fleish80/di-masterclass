import { Component, OnInit } from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-card',
  template: `
    <div class="card p-2 m-2 border-danger bg-light">
      <h4 class="card-text text-left text-danger">Content Component</h4>
      <ng-content></ng-content>
    </div>
  `,
  providers: [CounterService]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
