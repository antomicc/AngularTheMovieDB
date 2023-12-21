import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/movies.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-slider-top-rated',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './slider-top-rated.component.html',
  styleUrl: './slider-top-rated.component.css'
})
export class SliderTopRatedComponent implements OnInit, AfterViewInit {
  @Input() movies?:Movie[];


  movieSwiper: Swiper | any;
  movie:Movie[] = []
  constructor( private router:Router ) {}

  ngOnInit(): void {
    //console.log(this.movies);
  }
  ngAfterViewInit(): void {
    this.movieSwiper = new Swiper('.swiper-container-2', {
      loop: true,
    })
  }

  onSlidePrev() {
    this.movieSwiper.slidePrev();
  }

  onSlideNext() {
    this.movieSwiper.slideNext();
  }

  onClickdetailView(movie: Movie) {
    this.router.navigate(['/movie', movie.id])
  }
}
