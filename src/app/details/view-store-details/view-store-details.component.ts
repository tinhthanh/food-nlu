import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-view-store-details',
  templateUrl: './view-store-details.component.html',
  styleUrls: ['./view-store-details.component.scss'],
})
export class ViewStoreDetailsComponent implements OnInit {
  @ViewChild(IonContent,  {static: false, read: ElementRef}) contentArea: ElementRef;
  headerFixed  = false;
   
  @ViewChild("triggerElement", {read: ElementRef, static: true}) triggerElement: ElementRef;  
  private observer: IntersectionObserver;
  constructor(private render2: Renderer2) { }

  ngOnInit() {

      // new code 
  
      this.observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
           if(entry.isIntersecting) {
              console.log(" add transform");
              this.render2.removeClass(this.contentArea.nativeElement, "no-transform");
              this.headerFixed = false;
           } else {
              console.log("remove transform");
               this.render2.addClass(this.contentArea.nativeElement, "no-transform");
               this.headerFixed = true;
           }
        });
      });
      this.observer.observe(this.triggerElement.nativeElement);
  }

}
