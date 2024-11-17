import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { GalleryService } from '../../services/gallery.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [NgClass],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  /* cartObservable$ = this.dataService.itemsInCart$
    .pipe(
      tap(data => console.log(data))
    ); */

  galleryService = inject(GalleryService);
  dataService = inject(DataService);
  activeId: Signal<number> = this.galleryService.id;
  galleryItems: Signal<Array<{ id: number, src: string }>> = this.dataService.galleryItems;
  activeGalleryItem = computed(() => {
    return this.galleryItems().find(item => item.id === this.activeId())
  })

  onNextClick(): void {
    this.activeId() == 4 ? this.setId(1) : this.galleryService.setId(this.activeId() + 1);
  }

  onPrevClick(): void {
    this.activeId() == 1 ? this.setId(4) : this.galleryService.setId(this.activeId() - 1);
  }

  setId(id: number): void {
    this.galleryService.setId(id);
  }
}