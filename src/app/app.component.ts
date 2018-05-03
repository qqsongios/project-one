import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h2>大家好，我是{{name}}</h2><p>{{ address | json}}</p>'
})
export class AppComponent {
  name = 'qqsong';
  address={
    province:'福建',
    city:'厦门'
  }
}
