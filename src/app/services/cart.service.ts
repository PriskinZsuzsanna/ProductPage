import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { DataState } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /* STATE */
  private state: WritableSignal<CartState> = signal<CartState>({
    items: []
  });

  /* SELECTOR */
  items: Signal<CartItem[]> = computed(() => this.state().items);
  quantity: Signal<number> = computed(() => this.state().items.reduce((acc, item) => {
    acc += item.quantity();
    return acc;
  }, 0));

  /* ACTION */
  addToCart(id: Signal<number>, title: Signal<string>, quantity: Signal<number>, price: Signal<number>) {
    const itemId = id();
    const itemTitle = title();
    const itemQuantity = quantity();
    const itemPrice = price();
  
    const currentState = this.state();
  
    const existingItem = currentState.items.find(item => item.id() === itemId);
  
    this.state.update(state => {
      const updatedItems = existingItem
        ? state.items.map(item =>
            item.id() === itemId
              ? { ...item, quantity: computed(() => item.quantity() + itemQuantity) }
              : item
          )
        : [
            ...state.items,
            { id: signal(itemId), title: signal(itemTitle), quantity: signal(itemQuantity), price: signal(itemPrice) }
          ];
  
      return {
        ...state,
        items: updatedItems as CartItem[]
      };
    });
  }
  
  
}

export interface CartState {
  items: Array<CartItem>
}

export interface CartItem {
  id: Signal<number>,
  title: Signal<string>,
  quantity: Signal<number>,
  price: Signal<number>
}