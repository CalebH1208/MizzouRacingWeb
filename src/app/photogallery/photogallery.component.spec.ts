import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogalleryComponent } from './photogallery.component';

describe('PhotogalleryComponent', () => {
  let component: PhotogalleryComponent;
  let fixture: ComponentFixture<PhotogalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotogalleryComponent]
    });
    fixture = TestBed.createComponent(PhotogalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
