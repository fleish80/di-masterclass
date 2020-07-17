import {Component, SkipSelf} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-child',
  template: `
    <div class="card m-2 p-2 border-secondary bg-light">
      <h4 class="card-text text-left text-secondary">Child Component</h4>
      <pre>count: {{counterService.count}}</pre>
      <button class="btn btn-primary btn-sm" (click)="counterService.increase()">increase</button>
      <button class="btn btn-danger btn-sm mt-3" (click)="parent.increase()">increase parent</button>
    </div>

  `,
  providers: [CounterService]
})
export class ChildComponent {
  constructor(public counterService: CounterService,
              @SkipSelf() public parent: CounterService) {
  }
}
