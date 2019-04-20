import { Directive, Input, HostListener, OnInit, ComponentRef, ElementRef } from '@angular/core';
import { Overlay, OverlayRef, OverlayPositionBuilder, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[ptTooltip]',
})
export class TooltipDirective implements OnInit {
  @Input() text = '';

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay, private elementRef: ElementRef, private positionStrategyBuilder: OverlayPositionBuilder) {}

  ngOnInit(): void {
    console.log('text', this.text);
    this.instantiateOverlay();
  }

  instantiateOverlay(): void {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.createPositionStrategy(),
    });
  }

  instantiateTooltip(): void {
    const tooltipPortal = new ComponentPortal(TooltipComponent);
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(tooltipPortal);

    tooltipRef.instance.text = this.text;
  }

  createPositionStrategy(): FlexibleConnectedPositionStrategy {
    return this.positionStrategyBuilder.flexibleConnectedTo(this.elementRef).withPositions([
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -8,
      },
    ]);
  }

  @HostListener('mouseenter')
  show(): void {
    this.instantiateTooltip();
  }

  @HostListener('mouseleave')
  hide(): void {
    this.overlayRef.detach();
  }
}
