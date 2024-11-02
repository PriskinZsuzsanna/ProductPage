import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'price',
  standalone: true,
  imports: [DecimalPipe, PercentPipe],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {
  dataService = inject(DataService);
  price = this.dataService.price;
  discount = this.dataService.discount;
}