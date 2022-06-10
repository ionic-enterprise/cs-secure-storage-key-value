import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CacheOptions, CacheService, CacheStrategy } from './cache.service';
import { Person, Planet, Ship } from './models';
import { defaultIfEmpty, map } from 'rxjs/operators';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public strategy: CacheOptions = CacheStrategy.fresh;


  constructor(private httpClient: HttpClient, private dataStorage: DataStorageService, private cacheService: CacheService) {
    this.cacheService.cacheStorageProvider = this.dataStorage;
  }

  public getPeople(id?: number): Observable<Person[]> {
    return this.get('people', id);
  }

  public getPlanets(id?: number): Observable<Planet[]> {
    return this.get('planets', id);
  }

  public getShips(id?: number): Observable<Ship[]> {
    return this.get('starships', id);
  }

  private get(entity: string, id?: number): Observable<any[]> {
    const url = `https://swapi.dev/api/${entity}${id ? '/' + id : ''}`;
    return this.cacheService.observe(
      `${entity}-${id}`,
      this.httpClient.get(url),
      this.strategy
    ).pipe(map(val => val.results), defaultIfEmpty(undefined));
  }
}
