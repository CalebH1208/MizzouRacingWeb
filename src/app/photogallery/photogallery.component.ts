import { Component } from '@angular/core';
import {Photo} from "../photo";
import {PHOTOS} from "../PGList";
import {PhotoComponent} from "../photo/photo.component";

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent {

    protected readonly PHOTOS = PHOTOS;
    leftScroll() {
        const left = document.querySelector(".sidescroll");
        // @ts-ignore
        left.scrollBy(-630, 0);
    }
    rightScroll() {

        const right = document.querySelector(".sidescroll");
        // @ts-ignore
        right.scrollBy(630  , 0);

    }
  leftScroll2() {
    const left = document.querySelector("#side2");
    // @ts-ignore
    left.scrollBy(-630, 0);
  }
  rightScroll2() {

    const right = document.querySelector("#side2");
    // @ts-ignore
    right.scrollBy(630  , 0);

  }

}
