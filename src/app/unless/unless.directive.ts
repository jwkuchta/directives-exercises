import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // we need to get condition as an Input and bind to a property called unless
  // whenever the condition changes, we want to execute a method (setter is executed when the condition changes)
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // creates a view (our tempRef) in the container
      this.vcRef.createEmbeddedView(this.tempRef)
    } else {
      // remove everything from this place in the DOM
      this.vcRef.clear()
    }

  }

  // in order to put the directive on our template we need access to the template 
  // (via TemplateRef) - the WHAT, and the view container (via ViewContainer Ref) - the WHERE and inject it there
  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
