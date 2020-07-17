import {Component, Self, SkipSelf} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-lazy-feature',
  template: `
      <div class="card pt-2 pl-3 m-3 pb-5 bg-light border-primary">
          <h4 class="card-text text-left text-primary">Lazy Module</h4>
          <div class="card m-3 pt-2 pl-3 pb-5 border-success">
              <h4 class="card-text text-left text-success">Lazy Component</h4>
            <pre>count: {{counterService.count}}</pre>
            <button class="btn btn-primary btn-sm" (click)="counterService.increase()">increase</button>
          </div>
      </div>
  `,
  providers: [CounterService]
})
export class LazyFeatureComponent {

  constructor(@Self() public counterService: CounterService,
              @SkipSelf() public parentCounter: CounterService) {
    if (parentCounter) {
      this.counterService = parentCounter;
    }
  }

}
