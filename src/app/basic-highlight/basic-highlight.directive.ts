import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

// injection is an easier way to get access to other classes
export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }

}