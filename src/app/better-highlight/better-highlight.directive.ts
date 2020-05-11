// import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appBetterHighlight]'
// })
// export class BetterHighlightDirective implements OnInit {

//   // 
//   constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

//   // renderer is a better approach of accessing the dom
//   ngOnInit() {
//     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'light-blue')
//   }
// }

// the following is an interactive version

import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'light-blue', false, false)
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'goldenrod')
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'magenta')
  }

}
