import { HttpClient } from '@angular/common/http';
import { marbles } from 'rxjs-marbles';
import { Holiday } from '../holiday';
import { holidaysActions } from './holidays.actions';
import { HolidaysEffects } from './holidays.effects';

describe('Holidays Effects', () => {
  it(
    'should test find$',
    marbles((m) => {
      const httpClient = {
        get: () => m.cold('---a', { a: { holidays: [{ id: 1 }] } })
      };
      const actions$ = m.cold('a', { a: holidaysActions.findHolidays() });

      const effect = new HolidaysEffects(actions$, (httpClient as unknown) as HttpClient);
      m.expect(effect.find$).toBeObservable('3ms a', {
        a: holidaysActions.findHolidaysSuccess({ holidays: [({ id: 1 } as unknown) as Holiday] })
      });
    })
  );
});
