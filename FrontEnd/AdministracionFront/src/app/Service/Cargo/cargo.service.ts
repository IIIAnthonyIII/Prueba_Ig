import { Injectable } from '@angular/core';
import { apiConfig } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private uriApi = apiConfig.uriApi;
  constructor (private http: HttpClient) {}
  public getData(): Observable<any>{
    return this.http.get<any>(this.uriApi+"cargo");
  }
  public getDataOne(id: any): Observable<any>{
    return this.http.get<any>(this.uriApi+"cargo/"+id);
  }
}
