import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Restaurant} from '../restaurant';
@Injectable({
  providedIn: 'root'
})
export class KosherApiService {

  constructor(private http: HttpClient) { }
  getRestaurants(): Observable<Restaurant>{}
}
