import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ResetArtist } from '../../store/actions/artist.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  onGoHome() {
    this.store.dispatch(new ResetArtist());
    this.router.navigate(['/home']);
  }

}
