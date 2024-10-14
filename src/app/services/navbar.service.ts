import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  /* STATE */
  private state: WritableSignal<NavbarState> = signal<NavbarState>({ isOpen: false });

  /* SELECTOR */
  isOpen: Signal<boolean> = computed(() => this.state().isOpen);

  constructor() { }

  setNavbarState(isOpen: boolean) {
    this.state.update(state => ({
      ...state,
      isOpen: isOpen
    }))
  }
}

export interface NavbarState {
  isOpen: boolean
}