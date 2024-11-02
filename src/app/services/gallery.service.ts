import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  /* STATE */
  private state: WritableSignal<GalleryState> = signal<GalleryState>({ id: 1 });

  /* SELECTOR */
  id: Signal<number> = computed(() => this.state().id);

  /* ACTION */
  setId(id: number) {
    this.state.update(state => ({
      ...state,
      id: id
    }))
  }
}

export interface GalleryState {
  id: number
}