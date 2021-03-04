import {Component, Input} from '@angular/core';

interface Holiday {
  id: number;
  title: string;
  teaser: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-holiday-card',
  templateUrl: './holiday-card.component.html',
  styleUrls: ['./holiday-card.component.scss']
})
export class HolidayCardComponent {
  @Input() holiday?: Holiday;
}
