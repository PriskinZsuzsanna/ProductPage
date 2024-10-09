import { Component, inject, Signal } from "@angular/core";
import { ModalService } from "../services/modal.service";

@Component({
  selector: 'modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  modalService = inject(ModalService);
  open: Signal<boolean> = this.modalService.open;

  toggleModal() {
    this.modalService.setModalState(!this.open());
  }
}