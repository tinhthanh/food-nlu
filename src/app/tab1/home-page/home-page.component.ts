import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import {MenuController} from '@ionic/angular';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('searchBar',  {static: false, read: ElementRef}) searchBar: ElementRef;
  @ViewChild('searchBarScroll',  {static: false, read: ElementRef}) searchBarScroll: ElementRef;

  @ViewChild('triggerElement', {read: ElementRef, static: true}) triggerElement: ElementRef;
  private observer: IntersectionObserver;
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  constructor(private render2: Renderer2, private menu: MenuController) { }

  ngOnInit() {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach( entry => {
         if (entry.isIntersecting) {
             this.render2.removeClass(this.searchBar.nativeElement, 'no-transform');
             this.render2.removeClass(this.searchBarScroll.nativeElement, 'search-transform');
         } else {
            console.log('remove transform');
            this.render2.addClass(this.searchBar.nativeElement, 'no-transform');
            this.render2.addClass(this.searchBarScroll.nativeElement, 'search-transform');
         }
      });
    });
    this.observer.observe(this.triggerElement.nativeElement);
  }
    openFirst() {
         console.log('demo');
         this.menu.enable(true, 'first');
         this.menu.open('first');
    }
}
