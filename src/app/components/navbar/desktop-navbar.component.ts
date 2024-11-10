import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'desktop-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/product-page/1">Product 1</a></li>
        <li><a routerLink="/product-page/2">Product 2</a></li>
        <li><a href="#">Man</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  `,
  styles: `
    :host {
      display: none;

      @media (min-width: 900px) {
        display: block;
      }
    }

    ul {
      display: flex;
      list-style: none;        
      gap: 1.2rem;
      translate: 0 .1rem;
      padding-inline: var(--padding-inline);

      li {
        cursor: pointer;
      }
    }
  `
})
export class DesktopNavbarComponent { }