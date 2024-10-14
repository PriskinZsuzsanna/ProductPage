import { NgClass } from '@angular/common';
import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'mobile-navbar',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="logo">
        <nav
          class="mobile-nav"
          [ngClass]="{open: isOpen()}"
          (click)="toggleNavbarState()">
            <img src="assets/images/icon-close.svg" alt="Close icon">
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </nav>
      <img (click)="toggleNavbarState()" src="assets/images/icon-menu.svg" alt="Navbar menu icon">
      <img src="assets/images/logo.svg" alt="" class="logo-title">
  </div>
  `,
  styles: `
    .logo {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    img {
      display: inline-block;

      &:nth-of-type(1) {
        padding-top: .35rem;
      }
    }

    .mobile-nav {
      position: absolute; /*relative to header*/
      left: -100%;
      top: 0;
      width: 100%;
      min-height: 100vh;
      background: linear-gradient(90deg, white, var(--pale-orange));
      padding: 1.5rem;
      z-index: 10;
      transition: left .3s;

      &.open {
        left: 0;
      }
    }

    .mobile-nav ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        margin-top: 3rem;
    }

    ul li {
        font-weight: 700;
        font-size: 1.4rem;
        cursor: pointer;
    }

    @media (min-width: 900px) {
        img:nth-of-type(1) {
            display: none;
        }

        .open-mobile-nav {
            display: none;
        }
    }
  `
})
export class MobileNavbar {

  navbarService: NavbarService = inject(NavbarService);
  isOpen: Signal<boolean> = this.navbarService.isOpen;

  toggleNavbarState() {
    this.navbarService.setNavbarState(!this.isOpen());
  }
}