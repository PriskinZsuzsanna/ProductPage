import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /* STATE */
  private state: WritableSignal<CartState> = signal<CartState>({
    items: []
  });

  /* SELECTOR */
  quantity: Signal<number> = computed(() => this.state().items.length);

  /* ACTION */
  addToCart(id: Signal<number>, quantity: Signal<number>, price: Signal<number>) {
    this.state.update(state => ({
      ...state,
      items: [...state.items, {id, quantity, price} ] // @todo find - reduce
    }));
  }
}

export interface CartState {
  items: Array<CartItem>
}

export interface CartItem {
  id: Signal<number>,
  quantity: Signal<number>,
  price: Signal<number>
}