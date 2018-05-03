import { Component } from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  template: `<h2>大家好，我是{{name}}</h2>
  <p>{{ address | json}}</p>
  {{mailService.message}}
  <app-simple-form></app-simple-form>`
})
export class AppComponent {
  name = 'qqsong';
  address={
    province:'福建',
    city:'厦门'
  }
  constructor(private mailService:MailService){}
}
