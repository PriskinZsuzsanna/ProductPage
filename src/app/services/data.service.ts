import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /* STATE */
  private state: WritableSignal<DataState> = signal<DataState>({
    id: 1,
    galleryItems: [
      {id: 1, src: '/assets/images/image-product-1'},
      {id: 2, src: '/assets/images/image-product-2'},
      {id: 3, src: '/assets/images/image-product-3'},
      {id: 4, src: '/assets/images/image-product-4'},
    ]
  });

  /* SELECTOR */
  id: Signal<number> = computed(() => this.state().id);
  galleryItems: Signal<Array<{ id: number, src: string }>> = computed(() => this.state().galleryItems);

  /* ACTION */
  setData() {
    this.state.update(state => ({
      ...state,
      /* @todo: call data on activatedRouteParam */
    }))
  }
}

export interface DataState {
  id: number,
  galleryItems: Array<{ id: number, src: string }>
}