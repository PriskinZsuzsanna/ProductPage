import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'text',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  dataService = inject(DataService);
  group = this.dataService.group;
  title = this.dataService.title;
  text = this.dataService.text;
}