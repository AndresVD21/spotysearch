import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ResetArtist } from '../../store/actions/artist.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  refreshToken() {
    this.auth.refreshAccessToken();
  }

  onGoHome() {
    this.store.dispatch(new ResetArtist());
    this.router.navigate(['/home']);
  }

}
