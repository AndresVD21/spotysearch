import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../../../models/track.model';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent implements OnInit {

  @Input() track: Track;
  faPlayCircle = faPlayCircle;

  constructor() { }

  ngOnInit() {
    console.log(this.track)
  }

  trackClicked(event) {
    console.log('Track clicked', event.target['id'])
  }

}
