import { Component, inject, Signal } from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { TextComponent } from "../../components/text/text.component";
import { PriceComponent } from "../../components/price/price.component";
import { ActionsComponent } from "../../components/actions/actions.component";

@Component({
  selector: 'product-page',
  standalone: true,
  imports: [GalleryComponent, TextComponent, PriceComponent, ActionsComponent],
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