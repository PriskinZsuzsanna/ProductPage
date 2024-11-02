import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /* STATE */
  private state: WritableSignal<DataState> = signal<DataState>({
    id: 1,
    galleryItems: [
      { id: 1, src: '/assets/images/image-product-1' },
      { id: 2, src: '/assets/images/image-product-2' },
      { id: 3, src: '/assets/images/image-product-3' },
      { id: 4, src: '/assets/images/image-product-4' },
    ],
    group: 'sneaker company',
    title: 'fall limited edition sneakers',
    text: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125,
    discount: 0.5,
    quantityInCart: 0
  });

  /* SELECTOR */
  id: Signal<number> = computed(() => this.state().id);
  galleryItems: Signal<Array<{ id: number, src: string }>> = computed(() => this.state().galleryItems);
  group: Signal<string> = computed(() => this.state().group);
  title: Signal<string> = computed(() => this.state().title);
  text: Signal<string> = computed(() => this.state().text);
  price: Signal<number> = computed(() => this.state().price);
  discount: Signal<number> = computed(() => this.state().discount);
  quantityInCart: Signal<number> = computed(() => this.state().quantityInCart);

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
  galleryItems: Array<{ id: number, src: string }>,
  group: string,
  title: string,
  text: string,
  price: number,
  discount: number,
  quantityInCart: number
}