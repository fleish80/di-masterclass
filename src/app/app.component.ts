import {Component, Injector} from '@angular/core';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="card pt-2 pl-3 m-2 border-primary bg-light">
        <h4 class="card-text text-left text-primary"><strong>App Module (root) </strong></h4>
        <ul class="list-inline">
          <li class="list-inline-item"><a routerLink="">Home</a></li>
          <li class="list-inline-item"><a routerLink="eager">Eager</a></li>
          <li class="list-inline-item"><a routerLink="lazy">Lazy</a></li>
        </ul>
        <div class="card m-3 pt-2 pl-3 pb-5 border-success">
          <h4 class="card-text text-left text-success">App Component</h4>
          <router-outlet></router-outlet>
          <pre>count: {{counterService.count}}</pre>
          <button class="btn btn-primary btn-sm" (click)="counterService.increase()">increase</button>
        </div>

      </div>
    </div>

  `,
  providers: [CounterService]
})
export class AppComponent {

  constructor(public counterService: CounterService) {
  }
}

