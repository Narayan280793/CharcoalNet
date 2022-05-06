import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';





// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  config: SwiperOptions = {

    slidesPerView: 3,
    spaceBetween: 50,
   // navigation: true,

    scrollbar: { draggable: true },
    pagination: { clickable: true },
  };

   constructor() {

   }

   ngOnInit(): void {

  }








}
