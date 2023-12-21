import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../interfaces/movieDetail.interface';
import { Credits } from '../../interfaces/credits.interface';
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Movie } from '../../interfaces/movies.interface';
import { RatingModule } from "primeng/rating"; 
//import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-d',
  standalone: true,
  imports: [ CommonModule, RouterModule, RatingModule ],
  templateUrl: './movie-d.component.html',
  styleUrl: './movie-d.component.css'
})
export class MovieDComponent implements OnInit, AfterViewInit {

  movieDetail?:MovieDetails;
  movieCredits?:Credits;
  moviesRelated?:Movie[] = [];
  swiperCast: Swiper | any;
  swiperRelated: Swiper | any;

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute, private router:Router) {}

  ngAfterViewInit(): void {
    this.swiperCast = new Swiper('.swiper', {
      slidesPerView: 3,
      //freeMode: true,
      spaceBetween: 15,
    })
    this.swiperRelated = new Swiper('.swiper-related', {
      slidesPerView: 3,
      //freeMode: true,
      spaceBetween: 15,
    })
  }

  ngOnInit(): void {
    //window.location.reload();
    const {id} = this.activatedRoute.snapshot.params;
    //console.log(id);
    this.moviesService.getMovieDetail(id).subscribe(movie => {
      //console.log(movie);
      this.movieDetail = movie
    });
    this.moviesService.getMovieCredits(id).subscribe(movie => {
      //console.log(movie);
      this.movieCredits = movie;
    })
    this.moviesService.getMoviesRelated(id).subscribe(movie => {
      //console.log(movie);
      this.moviesRelated = movie;
    })
  }

  onClickdetailView(movie: Movie) {
    this.router.navigate(['/movie', movie.id]).then(() => {
      window.location.reload();
    })
  }
}
