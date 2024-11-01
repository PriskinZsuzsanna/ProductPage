import { Component, inject, Signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  
  cartService = inject(CartService);
  modalService = inject(ModalService);
  isOpen: Signal<boolean> = this.modalService.open;
  quantity: Signal<number> = this.cartService.quantity;

  toggleCart() {
    this.modalService.setModalState(!this.isOpen());
  }
}