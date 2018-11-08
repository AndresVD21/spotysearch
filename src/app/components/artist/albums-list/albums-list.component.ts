import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../models/album.model';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  @Input() albums: Album[];

  constructor() { }

  ngOnInit() {
  }

}
