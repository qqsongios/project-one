import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';


import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {MailService} from './mail.service';
import { ComponentComponent } from './component/component.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MailService,{provide:'apiUrl',useValue:'https://jsonplaceholder.typicode.com/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
