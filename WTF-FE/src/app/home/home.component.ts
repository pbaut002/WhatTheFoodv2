import { Component, OnInit,  } from '@angular/core';
import { ApiService } from '~/src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  submission:string = "";
  submitted:boolean= false;
  restaurants:Object;
  notFound:boolean=false;
  errorMessage:string="";

  constructor(public router: Router, private apiService: ApiService) { 
    this.submission = ""
    this.submitted=false;
    console.warn("Hello there");
    this.restaurants;
  }

  ngOnInit() {
  }

  onKey(value: string){
    this.submission = value;
  }

  openDialog(){
  }

  closeAlert(){
  }

  onSubmit(userLocation:string) {
    this.restaurants = null;
    this.submission = userLocation
  
    const locationData = userLocation.split(' ').join('+');
    this.apiService.getRestaurant(locationData).subscribe((data) => {
        this.notFound=false;
        this.submitted=true;
        this.restaurants = JSON.stringify(data);
        this.restaurants = JSON.parse(this.restaurants.toString());
        this.router.navigate(['location/',locationData]);
    },
    error => {
      this.submitted=false;
      this.notFound=true;
      this.errorMessage=`${userLocation} was not found`;
    });  
  }

}
