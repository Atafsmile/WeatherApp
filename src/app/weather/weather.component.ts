import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
lat:any;
lon:any;
weather:any;
cityName:string='';
  constructor(private weatherservice:WeatherService) { }
  

  ngOnInit(){
   this.getLocations();
  }
  getLocations(){
    if('geolocation' in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lon=success.coords.longitude;
        
        this.weatherservice.getWeatherDataByApi(this.lat,this.lon).subscribe(data=>{
          console.log(data);
          this.weather=data;
        })
      })
    }
  }
  getCity(city:string){
    this.weatherservice.getWeatherDataByCITY(city).subscribe(data=>{
      this.weather=data;
    })


  }
  
  

  }




