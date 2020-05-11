import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    //  where we attach this directive
    selector: '[appBasicHighlight]'
})

// injection is an easier way to get access to other classes
export class BasicHighlightDirective implements OnInit {

    // injection and arguments you want to get every time an instance of the class is created
    // which in this case is an elementRef. Adding "private" will automatically assign this value to the property
    // private is a Typescript shortcat
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        // accessing elements like this is not a good practice (directly)
        // see better-highlight
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }

}