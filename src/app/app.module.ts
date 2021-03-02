import {HttpClientModule} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from './app.component';
import {HolidaysModule} from './holidays/holidays.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HolidaysModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'de-AT'
    },
    {provide: LOCALE_ID, useValue: 'de-AT'},
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'outline'}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
