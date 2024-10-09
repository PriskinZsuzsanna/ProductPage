import { Routes } from '@angular/router';
import { ProductPage } from './frames/product-page/product-page.component';

export const routes: Routes = [
  { path: '', redirectTo: './product-page', pathMatch: 'full' },
  { path: 'product-page', component: ProductPage }
];
