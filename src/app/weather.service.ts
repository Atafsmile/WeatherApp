import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  Base_url='https://api.openweathermap.org/data/2.5/weather';
api_key='51973f9b46a7e2805b0a8ff249e92c07';
  constructor(private http:HttpClient) { }
  getWeatherDataByApi(lat:any,lon:any):Observable<any>{
   
     return this.http.get<any>(`${this.Base_url}?lat=${lat}&lon=${lon}&appid=${this.api_key}`);
  }

  getWeatherDataByCITY(city:string):Observable<any>{
   
    return this.http.get<any>(`${this.Base_url}?q=${city}&appid=${this.api_key}`);
    
 }


}
