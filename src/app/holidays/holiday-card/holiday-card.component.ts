import {Component, Input} from '@angular/core';

interface Holiday {
  id: number;
  title: string;
  teaser: string;
  description: string;
  imageUrl: string;
  typeId: number;
  durationInDays: number;
  minCount: number;
  maxCount: number;
}

@Component({
  selector: 'app-holiday-card',
  templateUrl: './holiday-card.component.html',
  styleUrls: ['./holiday-card.component.scss']
})
export class HolidayCardComponent {
  @Input() holiday?: Holiday;
}
