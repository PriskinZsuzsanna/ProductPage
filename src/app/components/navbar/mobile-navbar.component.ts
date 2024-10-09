import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mobile-navbar',
  standalone: true,
  template: `
    <div class="logo">
      @if (isOpenSubject.value) {
        <div class="filter" ></div>
        <nav class="open-mobile-nav">
          <img (click)="openClose()" src="assets/images/icon-close.svg" alt="">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      }
      <img (click)="openClose()" src="assets/images/icon-menu.svg" alt="">
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

    .filter {
      position: absolute; /*relative to header*/
      left:0;
      top: 0;
      width: 100%;
      min-height: 100vh;
      background: #000000a1;
      z-index: 9;
    }

    .open-mobile-nav {
      position: absolute; /*relative to header*/
      left:0;
      top: 0;
      width: 66%;
      min-height: 100vh;
      background: var(--white);
      padding: 1.5rem;
      z-index: 10;
    }

    .open-mobile-nav ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        margin-top: 3rem;
    }

    ul li {
        font-weight: 700;
        font-size: 1.4rem;
    }

    @media (min-width: 900px) {
        img:nth-of-type(1) {
            display: none;
        }

        .open-mobile-nav,
        .filter {
            display: none;
        }
    }
  `
})
export class MobileNavbar {

  isOpenSubject = new BehaviorSubject<boolean>(false);

  openClose() {
    let actual = this.isOpenSubject.value;
    this.isOpenSubject.next(!actual);
  }
}