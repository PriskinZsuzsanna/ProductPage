import { afterNextRender, Component, effect, inject, Input, numberAttribute, signal, Signal, SimpleChange, WritableSignal } from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { TextComponent } from "../../components/text/text.component";
import { PriceComponent } from "../../components/price/price.component";
import { ActionsComponent } from "../../components/actions/actions.component";
import { DataService, DataState } from "../../services/data.service";
import { catchError, delay, finalize, map } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'product-page',
  standalone: true,
  imports: [GalleryComponent, TextComponent, PriceComponent, ActionsComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPage {
  @Input({transform: numberAttribute}) pageId: number = 0;
  modalService: ModalService = inject(ModalService);
  dataService: DataService = inject(DataService);
  route: ActivatedRoute = inject(ActivatedRoute);
  open: Signal<boolean> = this.modalService.open;
  isLoading: Signal<boolean> = this.dataService.loading;
  errorMessage: Signal<string> = this.dataService.errorMessage;

  constructor() {
    afterNextRender(() => { //for mock delay
      this.getData();
    })

    this.route.paramMap.subscribe(params => {
      const newPageId = Number(params.get('pageId'));
      if (newPageId && newPageId !== this.pageId) {
        this.pageId = newPageId; // Update @Input value
        this.getData();
      }
    });
  }

  getData() {
    this.dataService.setLoadingState(true);
    this.dataService.setErrorState('');
    this.dataService.getData()
      .pipe(
        map(data => data.items.find((item: DataState) => item.id === this.pageId)),
        delay(1000),
        finalize(() => {
          this.dataService.setLoadingState(false);
        })
      )
      .subscribe((item: DataState | undefined) => {
        if (!item) {
          this.dataService.setErrorState('No item found');
          return;
        }
        this.dataService.setData(item);
      });
  }

  toggleModal() {
    this.modalService.setModalState(!this.open());
  }
}