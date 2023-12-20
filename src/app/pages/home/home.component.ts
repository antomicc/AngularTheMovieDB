import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies.interface';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  movies:Movie[] = []; 
  movieSlides: Movie[] = [];

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.getMoviesNowPlaying().subscribe(movies => {
      //console.log(movies);
      this.movies = movies;
      this.movieSlides = movies;
    })
  }
}
