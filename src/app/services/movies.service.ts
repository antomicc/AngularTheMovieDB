import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, of } from 'rxjs';
import { Movie, MoviesResponse } from '../interfaces/movies.interface';
import { MovieDetails } from '../interfaces/movieDetail.interface';
import { Credits } from '../interfaces/credits.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private urlEndpoint: string = 'https://api.themoviedb.org/3'
  private moviePage = 1;
  cargando = false;

  myHeaders = new Headers();
  requestOptions: any;
  
  constructor(private http: HttpClient) {
   
    this.myHeaders.append("Authorization", "Bearer ")
    this.requestOptions = {
      headers: this.myHeaders,
    }; 
  }

  get params() {
    return {
      api_key: '619e0517524129e6ec9272c242cc561d',
      language: 'es-ES',
      page: this.moviePage.toString(),
    }
  }

  getMoviesNowPlaying():Observable<Movie[]> {
    return this.http.get<MoviesResponse>(`${this.urlEndpoint}/movie/now_playing`, {params: this.params}).pipe(
      map((res) => res.results),
      tap(() => {
        this.moviePage+=1
      })
    )
  }

  getMoviesTopRated():Observable<Movie[]> {
    return this.http.get<MoviesResponse>(`${this.urlEndpoint}/movie/top_rated`, {params: this.params}).pipe(
      map((res) => res.results)
    )
  }

  getMoviesRelated(id: string):Observable<Movie[]> {
    return this.http.get<MoviesResponse>(`${this.urlEndpoint}/movie/${id}/similar`, {params: this.params}).pipe(
      map((res) => res.results)
    )
  }

  getMoviesPopular():Observable<Movie[]> {
    if(this.cargando){
      return of([]);  
    }

    this.cargando = true;
    return this.http.get<MoviesResponse>(`${this.urlEndpoint}/movie/popular`, {params: this.params}).pipe(
      map((res) => res.results),
      tap(() => {
        this.moviePage+=1;
        this.cargando = false;
      })
    )
  }

  getMovieDetail(id: string){
    return this.http.get<MovieDetails>(`${this.urlEndpoint}/movie/${id}`, {params: this.params});
  }

  getMovieCredits(id: string){
    return this.http.get<Credits>(`${this.urlEndpoint}/movie/${id}/credits`, {params: this.params});
  }

  

  resetMoviePage(){
    this.moviePage = 1;
  }
}
