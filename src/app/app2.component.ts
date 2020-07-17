import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app2-root',
  template: `
    <div class="container">
      <div class="card pt-2 pl-3 m-2 border-primary bg-light">
        <h4 class="card-text text-left text-primary"><strong>App2 Module (root)</strong></h4>
        <div class="card m-3 pt-2 pl-3 pb-5 border-success">
          <h4 class="card-text text-left text-success">App2 Component</h4>
        </div>
      </div>
    </div>
  `
})
export class App2Component {
}
