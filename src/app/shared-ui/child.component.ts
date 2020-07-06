import {Component, SkipSelf} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-child',
  template: `
      <div class="card m-2 p-2 border-secondary bg-light">
          <h4 class="card-text text-left text-secondary">Child Component</h4>
          <pre>count: {{ counter.count }}</pre>
          <button class="btn btn-primary btn-sm" 
                  (click)="counter.increase()">increase</button>
      </div>
  `,
})
export class ChildComponent {
  constructor(public counter: CounterService) {}
}
