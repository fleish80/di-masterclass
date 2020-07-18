import {Component} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-eager-feature',
  template: `
    <div class="card pt-2 pl-3 m-3 pb-5 border-primary bg-light">
      <h4 class="card-text text-left text-primary">Eager Module</h4>
      <div class="card m-3 pt-2 pl-3 pb-5 border-success">
        <h4 class="card-text text-left text-success">Eager Component</h4>
        <app-child></app-child>
        <app-child></app-child>

        <app-card>
          <app-child></app-child>
        </app-card>

      </div>
      <pre>count: {{counterService.count}}</pre>
      <button class="btn btn-primary btn-sm" (click)="counterService.increase()">increase</button>
    </div>
  `
})
export class EagerFeatureComponent {
  constructor(public counterService: CounterService) {
  }
}
