import { Component } from "@angular/core";

@Component({
  selector: 'desktop-navbar',
  standalone: true,
  template: `
    <nav>
      <ul>
        <li><a href="#">Collection</a></li>
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
    }
  `
})
export class DesktopNavbarComponent { }