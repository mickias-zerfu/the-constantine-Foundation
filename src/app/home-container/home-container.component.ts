import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css','./cards.css','./owl.css','btn.css']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }
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
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: false,
    dotsEach: true,
    dotsData: true,
  }
  ngOnInit(): void {
  }

  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
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
  partnersOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
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
        items: 4,
      },
    },
    nav: true,
  };
}
