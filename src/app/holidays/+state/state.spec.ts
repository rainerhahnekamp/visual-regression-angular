import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { holidaysActions } from './holidays.actions';
import { HolidaysEffects } from './holidays.effects';
import { holidaysFeatureKey, holidaysReducer } from './holidays.reducer';
import { fromHolidays } from './holidays.selectors';

describe('Full ngrx Test', () => {
  it('should load holidays', (done) => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ [holidaysFeatureKey]: holidaysReducer }),
        EffectsModule.forRoot([HolidaysEffects]),
        HttpClientTestingModule
      ]
    });

    const store = TestBed.inject(Store);
    const controller = TestBed.inject(HttpTestingController);
    store.dispatch(holidaysActions.findHolidays());

    const [request] = controller.match((req) => req.url.includes('holidays.json'));
    request.flush({
      holidays: [
        { id: 1, title: 'Mountains' },
        { id: 2, title: 'Ocean' }
      ]
    });

    store.select(fromHolidays.get).subscribe((holidays) => {
      expect(holidays).toHaveLength(2);
      done();
    });
  });
});
