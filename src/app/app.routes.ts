import { Routes } from '@angular/router';
import { ProductPage } from './frames/product-page/product-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'product-page/1', pathMatch: 'full' },
  { path: 'product-page', redirectTo: 'product-page/1', pathMatch: 'full' },
  { path: 'product-page/:pageId', component: ProductPage },
  { path: '**', component: ProductPage }
];
