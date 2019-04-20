import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { TooltipDirective } from './directive/tooltip.directive';
import { TooltipComponent } from './component/tooltip/tooltip.component';

@NgModule({
  declarations: [AppComponent, TooltipDirective, TooltipComponent],
  imports: [BrowserModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
