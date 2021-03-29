import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
@Directive({
  selector: '[appHighlightOdds]'
})
export class HighlightDirective implements OnChanges {
  @Input()
  appHighlightOdds: string;
  @Input()
  isHighlight: boolean = true;
  @Input()
  trackChange: Function = this.hasChange;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
       if (this.isHighlight && changes['appHighlightOdds']  && this.trackChange(changes['appHighlightOdds'].previousValue, changes['appHighlightOdds'].currentValue)) {
         this.el.nativeElement.classList.add('change');
         setTimeout(() => this.el.nativeElement.classList.remove('change'), 450);
       }
  }

  hasChange(previousValue: any, currentValue: any): boolean {
    return (JSON.stringify(previousValue) != JSON.stringify(currentValue));
  }
}
