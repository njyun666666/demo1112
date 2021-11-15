import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.css']
})
export class AaaComponent implements OnInit, AfterViewInit {


  @ViewChild('sidebar') sidebarDOM?: ElementRef;


  fbForm: FormGroup = this.fb.group({
    account: ['', [Validators.required, Validators.minLength(5)]],
    password: ['']
  });



  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2
  ) { }




  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.sidebarDOM);
  }

  output(text: string) {
    console.log(text);
  }


  btnClick(event: MouseEvent) {
    console.log(event);

    if (event.ctrlKey) {
      console.log('ctrlKey', event.ctrlKey);
    }

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }


  fbSubmit(form: FormGroup) {
    console.log(form.value);
  }

  fbAcountKey(event: KeyboardEvent) {
    // console.log(event.key);
  }

  fbEnter(value: string) {
    console.log(value);
  }


  meunToggle() {
    const dom = this.sidebarDOM?.nativeElement as HTMLDivElement;

    if (dom.classList.contains('close')) {

      dom.classList.remove('close');

    } else {
      dom.classList.add('close');
    }

  }


}
