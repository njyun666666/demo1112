import { Directive, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInput]'
})
export class InputDirective implements OnInit, OnChanges {

  constructor(
    private control: NgControl
  ) { }


  ngOnInit(): void {

    console.log(this.control);

    this.control.control?.valueChanges.subscribe(value => {
      console.log(value);
    });

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


}
