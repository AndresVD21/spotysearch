import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/app.reducer';
import { effectsArr } from './store/effects/index';

import { AppRoutingModule } from './app-routing.module';
import { SpotysearchModule } from './modules/spotysearch.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(effectsArr),
    SweetAlert2Module.forRoot(),
    SharedModule,
    SpotysearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
