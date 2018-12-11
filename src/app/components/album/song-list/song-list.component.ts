import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../../models/track.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  @Input() tracks: Track[];
  @Input() albumName: string;
  @Input() albumImg: string;

  constructor() { }

  ngOnInit() {
    console.log(this.albumImg)
  }

}
