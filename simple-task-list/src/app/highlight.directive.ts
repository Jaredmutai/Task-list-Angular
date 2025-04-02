import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: string; // Task text to check

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appHighlight && this.appHighlight.length > 10) {
      this.el.nativeElement.style.backgroundColor = '#ffff99'; // Light yellow
    }
  }
}