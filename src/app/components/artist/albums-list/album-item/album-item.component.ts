import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../../models/album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent implements OnInit {

  @Input() album: Album;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  albumSelected(id: string) {
    console.log(id);
    this.router.navigate(['album',id]);
  }

}
