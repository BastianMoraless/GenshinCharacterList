import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  findAll():Observable<Personaje[]>{
    return this.http.get<Personaje[]>(`${this.BASE_URL}/personaje/`)
  }

  findOne(id: string):Observable<Personaje>{
    return this.http.get<Personaje>(`${this.BASE_URL}/personaje/${id}`)
  }

  create(data: FormData):Observable<Personaje>{
    return this.http.post<Personaje>(`${this.BASE_URL}/personaje/`, data)
  }

}
