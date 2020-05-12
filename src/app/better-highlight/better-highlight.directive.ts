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

// the following is an interactive version with @HostListener and @HostBinding

import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'green'
  @Input() highlightColor: string = 'yellow'
  // on the directory where this sits access the background color property and change it
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent' // we assigned it an initial value
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor // initial value with property binding
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'light-blue', false, false)
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'goldenrod')
    // option with @HostBinding:
    // this.backgroundColor = 'goldenrod'
    // option with custom property binding:
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'magenta')
    // option with @HostBinding:
    // this.backgroundColor = 'magenta'
    // option with custom property binding:
    this.backgroundColor = this.defaultColor
  }

}
