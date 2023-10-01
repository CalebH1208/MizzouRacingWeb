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

}
