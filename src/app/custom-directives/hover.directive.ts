import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]',
  standalone: true
})
export class HoverDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement);
  }

  @Input() color: string = "red";

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );
  };

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    )
  };

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    )
  };

}
