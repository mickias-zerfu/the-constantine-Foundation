import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
// import { OwlCarousel } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-campaign-container',
  templateUrl: './campaign-container.component.html',
  styleUrls: ['./campaign-container.component.css','../btn.css']
})
export class CampaignContainerComponent implements OnInit {

  campaignSlides = [
    {
      id: '1',
      src: '../../../assets/images/campaign/campaign 1.png' ,
      alt: 'Providing access to safe water',
      title: 'Providing access to safe water',
      content:'Providing access to safe water, sanitation, Education, Agriculture, Health',
      progress:60
    },
    {
      id: '2',
      src:'../../../assets/images/campaign/campaign 2.png' ,
      alt: 'Providing access to sanitation',
      title: 'Providing access to sanitation',
      content:'Providing access to safe water, sanitation, Education, Agriculture, Health',
      progress:20
    },
    {
      id: '3',
      src:'../../../assets/images/campaign/campaign 3.png' ,
      alt: 'Providing access to Education',
      title: 'Providing access to Education',
      content:'Providing access to safe water, sanitation, Education, Agriculture, Health',
      progress:50
    },
    {
      id: '4',
      src:'../../../assets/images/campaign/campaign 2.png' ,
      alt: 'Providing access to Agriculture',
      title: 'Providing access to Agriculture',
      content:'Providing access to safe water, sanitation, Education, Agriculture, Health',
      progress:90
    }
  ];
  @ViewChild(CarouselComponent)
  owlCarousel!: CarouselComponent;
  activeCauseIndex = 1;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    nav: true,
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.owlCarousel.translated.subscribe((event: any) => {
      // console.log(event);
      if (event.startPosition == 3) {
        this.activeCauseIndex = 0;
      }
      else {
        const currentSlideIndex = event.startPosition + 1;
        this.activeCauseIndex = currentSlideIndex;
      }
      // console.log(this.activeCauseIndex);
    });
  }
}
