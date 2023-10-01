import { Component, Input } from '@angular/core';
import{Photo} from "../photo";
import {ActivatedRoute} from "@angular/router";
import{Location} from "@angular/common";
import {PhotoService} from "../photo.service";
import {PHOTOS} from "../PGList";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})

export class PhotoDetailComponent {
  constructor(
      private route:ActivatedRoute,
      private photoService: PhotoService,
      private location:Location
  ) {
  }

  @Input() photo?: Photo;

  ngOnInit():void{
    this.getPhoto()
  }
  getPhoto(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.photoService.getPhoto(id)
        .subscribe(photo => this.photo = photo)
  }
  goBack(): void{
    this.location.back();
  }
  protected readonly PHOTOS = PHOTOS;
}
