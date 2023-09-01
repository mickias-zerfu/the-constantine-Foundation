import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partner-container',
  templateUrl: './partner-container.component.html',
  styleUrls: ['./partner-container.component.css']
})
export class PartnerContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  partnersSlides = [
    {
      id: '1',
      src: "../../../assets/images/logos/psyn.jpg",
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: '2',
      src: "../../../assets/images/logos/psyn.jpg",
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: '3',
      src: "../../../assets/images/logos/psyn.jpg",
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: '4',
      src: "../../../assets/images/logos/psyn.jpg",
      alt: 'Side 4',
      title: 'Side 4',
    },
    {
      id: '5',
      src: "../../../assets/images/logos/psyn.jpg",
      alt: 'Side 5',
      title: 'Side 5',
    },
    {
      id: '6',
      src: "../../../assets/images/logos/psyn.jpg",
      alt: 'Side 5',
      title: 'Side 5',
    },
    {
      id: '7',
      src: "../../../assets/images/logos/psyn.jpg",
      alt: 'Side 5',
      title: 'Side 5',
    },
    {
      id: '8',
      src: "../../../assets/images/logos/psyn.jpg",
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
