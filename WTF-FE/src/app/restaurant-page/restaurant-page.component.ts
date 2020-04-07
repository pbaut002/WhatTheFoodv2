import { Component, OnInit } from '@angular/core';
import { ApiService } from '~/src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {
  userLocation:string = "";
  restaurants:Object;
  firstRestaurant:string = "";
  constructor(public route: ActivatedRoute, private api: ApiService, public router: Router) { 
  }
  
  ngOnInit() {
    this.userLocation = this.route.snapshot.params.address;
    console.log(this.route.snapshot.params.address);

    this.api.getRestaurant(this.userLocation).subscribe(data => {
      var temp = JSON.stringify(data);
      this.restaurants = JSON.parse(temp);
      // Wait until get response from api, and get the first item
      this.firstRestaurant = (this.restaurants['businesses'].shift());
    },
    error => {
      this.router.navigate(['/']);
      console.log(`There was trouble getting restaurants from ${this.userLocation}`);
    });
  }


  getNextRestaurant(){
    /* Get the next restaurant in the list while there is still something to get */
    if (this.restaurants['businesses'].length == 0){
      this.firstRestaurant = "Empty :C";
      return;
    }
    this.firstRestaurant = (this.restaurants['businesses'].shift());
  }
}
