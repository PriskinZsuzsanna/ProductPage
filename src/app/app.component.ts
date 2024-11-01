import { Component, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';
import { DesktopNavbarComponent } from './components/navbar/desktop-navbar.component';
import { MobileNavbar } from './components/navbar/mobile-navbar.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, DesktopNavbarComponent, MobileNavbar, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  modalService = inject(ModalService);

  modalIsOpen: Signal<boolean> =  this.modalService.open;

}
