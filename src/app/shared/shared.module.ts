import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { SpotifyService } from '../services/spotify.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SearchbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    SearchbarComponent,
    ToolbarComponent
  ],
  providers: [
    SpotifyService
  ]
})
export class SharedModule { }
