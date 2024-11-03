import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { fromInteropObservable } from 'rxjs/internal/observable/innerFrom';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /* STATE */
  private state: WritableSignal<DataState> = signal<DataState>({
    id: 0,
    galleryItems: [],
    group: '',
    title: '',
    text: '',
    price: 0,
    discount: 0,
    quantityInCart: 0 //@todo move to cartService?
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

  http = inject(HttpClient);

  /* ACTION */
  getData(idParam: number) {
    this.http.get<{ items: Array<DataState>}>('/assets/data.json')
      .pipe(map(data => data.items.find((item: DataState) => item.id === idParam)))
      .subscribe((item: DataState| undefined) => {
        if (item) {
          this.setData(item);
        }
      });
  }

  setData(item: DataState) {
    this.state.set(item);
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