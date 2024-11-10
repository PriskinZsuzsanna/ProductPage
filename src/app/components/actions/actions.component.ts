import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'actions',
  standalone: true,
  imports: [NgIf],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  cartService = inject(CartService);
  dataService = inject(DataService);

  id: Signal<number> = this.dataService.id;
  title: Signal<string> = this.dataService.title;
  quantityInCart: Signal<number> = this.dataService.quantityInCart;
  quantity: WritableSignal<number> = signal(1);
  price: Signal<number>= this.dataService.price;
  isLoading: boolean = false;

  addToCart(): void {
    this.cartService.addToCart(this.id, this.title, this.quantity, this.price);
  }

  reduceQuantity(): void {
    this.quantity.update(quantity => quantity - 1 || 1);
  }

  increaseQuantity(): void {
    this.quantity.update(quantity => quantity + 1);
  }
}