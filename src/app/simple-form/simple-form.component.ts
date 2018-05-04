import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  @Input('param') msg:String;
  @Output() update=new EventEmitter<{text:String}>();

  ngOnInit() {
  }

  // onClick(event,value){
  //   console.log(event);
  //   console.log(value);
  // }

}
