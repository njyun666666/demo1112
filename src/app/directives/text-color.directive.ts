import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnChanges {

  @Input() appTextColor?: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {





  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
    const dom = this.el.nativeElement as HTMLInputElement;
    console.log(dom);
    console.log(dom.classList);

    const length = changes.appTextColor.currentValue.length;

    if (length >= 10) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
      dom.classList.remove('green');
    }
    else if (length >= 5) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
    }
    else if (length > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    }
    else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#fff');
    }






    // dom.classList.add('red');
    // dom.classList.remove('green');


  }

}
