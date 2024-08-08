import { Component, OnInit } from '@angular/core';
import { GetAllTVShowsResponse } from 'src/interfaces/GetAllTVShowsResponse';
import { TvShowsServiceService } from './services/tv-shows-service.service';
import { CreateTVShowRequest } from 'src/interfaces/CreateTVShowRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tvShows: GetAllTVShowsResponse[] = [];

  constructor(private tvshowsService: TvShowsServiceService) { }

  ngOnInit(): void {
    this.getTVShows();
  }

  getTVShows(): void {
    this.tvshowsService.getAllTVShows().subscribe(tvShows => {
      this.tvShows = tvShows;
    });
  }

  createTVShow(): void {
    const newShow: CreateTVShowRequest = { name: 'New Show' };
    this.tvshowsService.createTVShow(newShow).subscribe(show => {
      console.log('Created Show:', show);
      this.getTVShows(); // Refresh the list
    });
  }
}
