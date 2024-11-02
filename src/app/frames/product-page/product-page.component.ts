import { Component, inject, Signal } from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { GalleryComponent } from "../../components/gallery/gallery.component";

@Component({
  selector: 'product-page',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPage {
  modalService: ModalService = inject(ModalService);
  open: Signal<boolean> = this.modalService.open;

  toggleModal() {
    this.modalService.setModalState(!this.open());
  }
}