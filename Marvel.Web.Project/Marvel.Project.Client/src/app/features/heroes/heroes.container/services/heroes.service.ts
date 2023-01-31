import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private url = 'https://localhost:7068';
  constructor(private http: HttpClient) {}
  getHeroes() {
    return this.http.get<Hero[]>(`${this.url}/heroes`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
  getHero(id: string) {
    return this.http.get<Hero>(`${this.url}/heroes/${id}`);
  }

  addHero(hero: Hero) {
    return this.http.post<Hero>(`${this.url}heroes/`, hero);
  }

  updateHero(hero: Hero) {
    return this.http.put<Hero>(`${this.url}/heroes`, hero);
  }
  deleteHero(id: string) {
    return this.http.delete<Hero>(`${this.url}/heroes/${id}`);
  }
}