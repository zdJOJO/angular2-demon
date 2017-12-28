/**
 * 自定义属性型指令
 * 
 * @class
*/

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[jojoHighlight]'
})

export class HighlightDirective {
  
  constructor(private el: ElementRef) { }

  @Input("jojoHighlight") highlightColor: string;
  @Input() fontSize: number

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor, this.fontSize);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, 15);
  }

  private highlight(highlightColor: string, size: number){
    this.el.nativeElement.style.backgroundColor = highlightColor;
    this.el.nativeElement.style.fontSize = `${size}px`;
  }

}