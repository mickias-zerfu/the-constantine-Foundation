import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-campaign-container',
  templateUrl: './campaign-container.component.html',
  styleUrls: ['./campaign-container.component.css']
})
export class CampaignContainerComponent implements OnInit {

  partnersSlides = [
    {
      id: '1',
      src: "https://i.postimg.cc/t4w94PSN/logo1.png",
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: '2',
      src: "https://i.postimg.cc/t4w94PSN/logo1.png",
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: '3',
      src: "https://i.postimg.cc/t4w94PSN/logo1.png",
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: '4',
      src: "https://i.postimg.cc/t4w94PSN/logo1.png",
      alt: 'Side 4',
      title: 'Side 4',
    },
    {
      id: '5',
      src: "https://i.postimg.cc/t4w94PSN/logo1.png",
      alt: 'Side 5',
      title: 'Side 5',
    },
    {
      id: '6',
      src: "https://i.postimg.cc/t4w94PSN/logo1.png",
      alt: 'Side 5',
      title: 'Side 5',
    },
    {
      id: '7',
      src: "https://i.postimg.cc/t4w94PSN/logo1.png",
      alt: 'Side 5',
      title: 'Side 5',
    },
    {
      id: '8',
      src: "https://i.postimg.cc/t4w94PSN/logo1.png",
      alt: 'Side 5',
      title: 'Side 5',
    },
  ];
  @ViewChild(CampaignContainerComponent) owlCarousel: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 900,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 2
      },
      1000: {
        items: 2
      }
    },
    nav: true,
    dotsEach: true,
    dotsData: true,
  }

  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    // this.activeSlides = data;
    // console.log(this.activeSlides);
    const currentIndex = this.owlCarousel.current();
    console.log(currentIndex);

    this.partnersSlides.forEach((slide, index) => {

      if (index === currentIndex) {
        // Set active slide width to 60%
        slide.alt = '60%';
      } else {
        // Set other slides to 20%
        slide.alt = '20%';
      }

    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
