import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiConfig } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private uriApi = apiConfig.uriApi;
  constructor (private http: HttpClient) {}
  public getData(): Observable<any>{
    return this.http.get<any>(this.uriApi+"users");
  }
  public getDataOne(id: any): Observable<any>{
    return this.http.get<any>(this.uriApi+"user/"+id);
  }
  public createData(user: any): Observable<any> {
    return this.http.post<any>(this.uriApi + "user", user);
  }
  public updateData(id:any, user: any): Observable<any> {
    return this.http.put<any>(this.uriApi+"user/"+id, user);
  }
  public deleteData(id: any): Observable<any>{
    return this.http.delete<any>(this.uriApi+"user/"+id);
  }
}