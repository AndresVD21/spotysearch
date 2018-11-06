import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http'
import { SpotifyService } from '../services/spotify.service';


@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  exports: [
    SearchbarComponent
  ],
  providers: [
    SpotifyService
  ]
})
export class SharedModule { }
