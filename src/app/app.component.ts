import { Component, Inject } from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  template: `<h2>大家好，我是{{name}}</h2>
  <p>{{ address | json}}</p>
  <ul>
    <li *ngFor="let message of mailService.messages;index as i;">
      {{i}}--{{message.text}}
    </li>
  </ul>
  <p>API_URL:{{apiUrl}}</p>
  <app-simple-form *ngFor="let message of mailService.messages;" [param]=message.text 
    (update)="onUpdate(message.id,$event.text)"> </app-simple-form>`
})
export class AppComponent {
  name = 'qqsong';
  address={
    province:'福建',
    city:'厦门'
  }
  onUpdate(id, text) {
    console.log(text);
    this.mailService.update(id, text);
  }
  constructor(
    @Inject(MailService) private mailService,
    @Inject('apiUrl') private apiUrl
  ) {}
}
