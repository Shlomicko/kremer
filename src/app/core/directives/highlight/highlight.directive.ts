import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = '';

  @Input() appHighlight: string = '';

  private toggled: boolean = false

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.toggleHighLight(this.appHighlight || this.defaultColor || 'red');
  }

  private toggleHighLight(color: string): void {
    this.toggled = !this.toggled
    this.el.nativeElement.style.backgroundColor = this.toggled ? color : 'unset';
  }
}
