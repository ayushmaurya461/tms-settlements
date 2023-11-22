import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input() appTooltip: string | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appTooltip) {
      this.showTooltip(this.appTooltip);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip(text: string) {
    const tooltipElement = document.createElement('div');
    tooltipElement.textContent = text;
    tooltipElement.classList.add('tooltip');
    this.el.nativeElement.appendChild(tooltipElement);
  }

  private hideTooltip() {
    const tooltip = this.el.nativeElement.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  }
}
