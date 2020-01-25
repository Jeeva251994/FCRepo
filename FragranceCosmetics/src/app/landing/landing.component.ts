import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';


import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  imageUrls: any = []
  height: string = '400px';
  arrowSize: string = '30px';

  constructor() { }

  ngOnInit() {
    this.prepareImageArray();

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 9,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages=[];
    for (let i = 1; i <= 9; i++) {
      let obj = {
        small: '../../assets/images/gallery/' + i + '.jpg',
        medium: '../../assets/images/gallery/' + i + '.jpg',
        big: '../../assets/images/gallery/' + i + '.jpg'
      }
      this.galleryImages.push(obj)
    }
    console.log('this.galleryImages',this.galleryImages)
  }

  prepareImageArray() {
    for (let i = 1; i <= 9; i++) {
      let obj = {}
      obj['url'] = `../../assets/images/` + i + `.jpg`;
      this.imageUrls.push(obj)
    }
  }

  onClickSubmit(data) {
  }

}
