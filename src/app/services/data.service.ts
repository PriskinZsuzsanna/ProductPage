import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, tap } from 'rxjs';
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
    quantityInCart: 0, //@todo move to cartService?
    loading: false,
    errorMessage: ''
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
  loading: Signal<boolean> = computed(() => this.state().loading);
  errorMessage: Signal<string> = computed(() => this.state().errorMessage);

  http = inject(HttpClient);

  /* ACTION */
  getData(): Observable<{items: Array<DataState>}> {
    return this.http.get<{ items: Array<DataState>}>('/assets/data.json')
  }

  setData(item: DataState) {
    this.state.update(state => ({
      ...state,
      id: item.id,
      galleryItems: item.galleryItems,
      group: item.group,
      title: item.title,
      text: item.text,
      price: item.price,
      discount: item.discount
    }));
  }

  setLoadingState(loading: boolean): void {
    this.state.update(state => ({
      ...state,
      loading
    }));
  }

  setErrorState(errorMessage: string): void {
    this.state.update(state => ({
      ...state,
      errorMessage
    }));
  }

  resetProductData(): void {
    this.state.update(state => ({
      ...state,
      id: 0,
      galleryItems: [],
      group: '',
      title: '',
      text: '',
      price: 0,
      discount: 0,
      quantityInCart: 0,
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
  quantityInCart: number,
  loading: boolean,
  errorMessage: string
}