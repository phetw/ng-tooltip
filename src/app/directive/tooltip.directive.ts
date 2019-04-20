import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[ptTooltip]',
})
export class TooltipDirective {
  @Input() toolTipText = '';

  constructor() {}

  @HostListener('mouseenter')
  show(): void {}

  @HostListener('mouseout')
  hide(): void {}
}
