import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }
  currentRestaurant:string = "";
  remainingRestaurants = null;

  ngOnInit() {
    this.route.data.subscribe( restaurantList => {
      console.log(restaurantList);
      var data = JSON.stringify(restaurantList);
      this.remainingRestaurants = JSON.parse(data);
      this.currentRestaurant = this.remainingRestaurants[0];
    });
  }

}
