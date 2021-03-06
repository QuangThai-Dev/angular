import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {
  // elementRef: element sử dụng directive này
  constructor(private elementRef:ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
  }

}
