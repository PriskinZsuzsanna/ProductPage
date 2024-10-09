import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  /* STATE */
  private state: WritableSignal<ModalState> = signal<ModalState>({ open: false });

  /* SELECTOR */
  open: Signal<boolean> = computed(() => this.state().open);

  constructor() { }

  setModalState(open: boolean) {
    this.state.update(state => ({
      ...state,
      open: open
    }))
  }

}

export interface ModalState {
  open: boolean
}
