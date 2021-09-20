import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverButton]'
})
export class HoverButtonDirective implements OnInit{

  constructor(private elementRef :ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer2.addClass(this.elementRef.nativeElement,'btn-info');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer2.addClass(this.elementRef.nativeElement,'btn-info');
  }

  ngOnInit(){
    this.renderer2.addClass(this.elementRef.nativeElement,'btn-danger');
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color','red');
  }
}
