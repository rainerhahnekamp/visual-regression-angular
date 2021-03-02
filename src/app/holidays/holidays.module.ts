import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {HolidaysEffects} from './+state/holidays.effects';
import {holidaysFeatureKey, holidaysReducer} from './+state/holidays.reducer';
import {HolidayCardComponent} from './holiday-card/holiday-card.component';
import {HolidaysComponent} from './holidays/holidays.component';

@NgModule({
  declarations: [HolidaysComponent, HolidayCardComponent],
  exports: [HolidaysComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    StoreModule.forFeature(holidaysFeatureKey, holidaysReducer),
    EffectsModule.forFeature([HolidaysEffects]),

  ],
})
export class HolidaysModule {
}
