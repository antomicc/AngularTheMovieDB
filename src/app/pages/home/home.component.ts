import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies.interface';
import { SliderComponent } from '../../components/slider/slider.component';
import { SliderTopRatedComponent } from '../../components/slider-top-rated/slider-top-rated.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, SliderTopRatedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  moviesNow:Movie[] = []; 
  movieSlidesNow: Movie[] = [];

  moviesTopRated:Movie[] = []; 
  movieTopRatedSlidesNow: Movie[] = [];

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.getMoviesNowPlaying().subscribe(movies => {
      //console.log(movies);
      this.moviesNow = movies;
      this.movieSlidesNow = movies;
    })

    this.moviesService.getMoviesTopRated().subscribe(movies => {
      this.moviesTopRated = movies;
      this.movieTopRatedSlidesNow = movies;
    })

  }

  ngOnDestroy(): void {
    this.moviesService.resetMoviePage();
  }
}
