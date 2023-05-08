import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = "assets/"
  constructor(private http:HttpClient) { }
  obtenerDatos(){
    return this.http.get("../assets/info1.json")
  }
}
