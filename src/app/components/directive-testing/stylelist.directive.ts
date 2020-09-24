import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[hoverfocus]',
})
export class HoverFocusDirective {
  @HostBinding('style.background-color') backgroundColor: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.font-size') fontSize: string;

  @HostListener('mouseover') onHover() {
    this.backgroundColor = 'orange';
    this.color = '#fff';
    this.fontSize = '30px';
  }

  @HostListener('mouseout') onLeave() {
    this.backgroundColor = 'red';
    this.color = '#fff';
    this.fontSize = '30px';
  }
}
