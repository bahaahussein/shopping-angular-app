import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  @HostBinding('class.open') private openClass: boolean = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.openClass = this.elementRef.nativeElement.contains(event.target) ? !this.openClass : false;
  }

  // @HostListener('click') toggleOpen(eventData: Event) {
  //   this.openClass = !this.openClass;
  // }
}
