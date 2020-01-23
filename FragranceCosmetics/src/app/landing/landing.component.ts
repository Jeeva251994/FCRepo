import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  imageUrls: any = []
  height: string = '400px';
  arrowSize: string = '30px';
  
  constructor() { }

  ngOnInit() {
    this.prepareImageArray();
  }

  prepareImageArray(){
    for(let i=1;i<=9;i++){
      let obj =  {}
      obj['url'] =`../../assets/images/`+i+`.jpg`;
      this.imageUrls.push(obj)}
  }

}
