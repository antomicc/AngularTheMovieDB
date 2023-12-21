import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-rated',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.css'
})
export class TopRatedComponent implements OnInit, OnDestroy {
  moviesPopular:Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    //console.log('scroll funciona')
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(pos > max){
      this.moviesService.getMoviesTopRated().subscribe(movies => {
        this.moviesPopular.push(...movies)
      })
    }
  }


  constructor(private moviesService: MoviesService, private router:Router){}

  ngOnInit(): void {
    this.moviesService.getMoviesPopular().subscribe(movies => {
      //console.log(movies);
      this.moviesPopular = movies;
    })
  }

  
  
  onClickdetailView(movie: Movie) {
    this.router.navigate(['/movie', movie.id])
  }
  
  ngOnDestroy(): void {
    this.moviesService.resetMoviePage();
  }
}
