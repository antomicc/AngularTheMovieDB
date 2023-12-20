import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie, MoviesResponse } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private urlEndpoint: string = 'https://api.themoviedb.org/3'
  private moviePage = 1;

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
      map((res) => res.results)
    )
  }
}
