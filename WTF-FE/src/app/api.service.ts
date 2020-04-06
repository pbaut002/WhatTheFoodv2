import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public getRestaurant(location:string) {
    console.log("Getting Restaurants...");
    return this.httpClient.get(`http://localhost:7822/location=${location}`);
  }
}
