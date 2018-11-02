import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { FavoritesListComponent } from '../components/home/favorites-list/favorites-list.component';
import { FavoriteSongComponent } from '../components/home/favorites-list/favorite-song/favorite-song.component';
import { ArtistComponent } from '../components/artist/artist.component';
import { AlbumsListComponent } from '../components/artist/albums-list/albums-list.component';
import { AlbumItemComponent } from '../components/artist/albums-list/album-item/album-item.component';
import { AlbumComponent } from '../components/album/album.component';
import { SongListComponent } from '../components/album/song-list/song-list.component';
import { SongItemComponent } from '../components/album/song-list/song-item/song-item.component';

@NgModule({
  declarations: [
    HomeComponent, 
    FavoritesListComponent, 
    FavoriteSongComponent, 
    ArtistComponent, 
    AlbumsListComponent, 
    AlbumItemComponent, AlbumComponent, SongListComponent, SongItemComponent],
  imports: [
    CommonModule
  ]
})
export class SpotysearchModule { }
