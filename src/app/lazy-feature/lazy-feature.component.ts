import {Component, Host, Optional, Self, SkipSelf} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-lazy-feature',
  template: `
      <div class="card pt-2 pl-3 m-3 pb-5 bg-light border-primary">
          <h4 class="card-text text-left text-primary">Lazy Module</h4>
          <div class="card m-3 pt-2 pl-3 pb-5 border-success">
              <h4 class="card-text text-left text-success">Lazy Component</h4>
              <pre>count: {{ counter.count }}</pre>
              <button class="btn btn-primary btn-sm"
                      (click)="counter.increase()">increase</button>  
          </div>
      </div>
  `,
  providers: [CounterService]
})
export class LazyFeatureComponent {
  counter: CounterService;

  constructor(@Self() counter: CounterService,
              @Optional() @SkipSelf() @Host() parentCounter: CounterService) {

      if(parentCounter) {
        this.counter = parentCounter;
      } else {
        this.counter = counter
      }
  }
}
