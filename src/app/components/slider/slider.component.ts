import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/movies.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() movies?:Movie[];
  movieSwiper?: Swiper;
  movie:Movie[] = []

  constructor() {}
  
  ngOnInit(): void {
    console.log(this.movies);
  }
  ngAfterViewInit(): void {
    this.movieSwiper = new Swiper('.swiper', {
      loop: true,
    })
  }
}
