import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /* STATE */
  private state: WritableSignal<CartState> = signal<CartState>({
    quantity: 0,
    items: []
  });

  /* SELECTOR */
  quantity: Signal<number> = computed(() => this.state().quantity);
}

export interface CartState {
  quantity: number,
  items: Array<CartItem>
}

export interface CartItem {
  id: number,
  quantity: number,
  price: number
}