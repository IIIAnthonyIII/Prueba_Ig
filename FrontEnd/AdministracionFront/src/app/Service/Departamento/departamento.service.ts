import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiConfig } from '../../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private uriApi = apiConfig.uriApi;
  constructor (private http: HttpClient) {}
  public getData(): Observable<any>{
    return this.http.get<any>(this.uriApi+"departamento");
  }
}
