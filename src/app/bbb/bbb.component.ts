import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bbb',
  templateUrl: './bbb.component.html',
  styleUrls: ['./bbb.component.css']
})
export class BbbComponent implements OnInit {

  @Output() textEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.textEmitter.emit('test');

  }

}
