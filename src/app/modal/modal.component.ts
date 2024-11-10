import { Component, inject, Signal } from "@angular/core";
import { ModalService } from "../services/modal.service";
import { DecimalPipe, NgFor, NgIf, TitleCasePipe } from "@angular/common";
import { CartItem, CartService } from "../services/cart.service";

@Component({
  selector: 'modal',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe, DecimalPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  modalService = inject(ModalService);
  cartService = inject(CartService);
  open: Signal<boolean> = this.modalService.open;
  items: Signal<Array<CartItem>> = this.cartService.items;

  toggleModal() {
    this.modalService.setModalState(!this.open());
  }

  deleteItem(id: number, event: Event): void {
    event.stopPropagation();
    this.cartService.deleteFromCart(id);
  }
}