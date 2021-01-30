import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { dishes } from './dishes.model';

@Injectable({
  providedIn: 'root',
})
export class DishesServicesService {
  selectedDish: dishes;
  dishes: dishes[];
  constructor(private http: HttpClient) {}
  readonly baseurl = 'http://localhost:3000/dish';

  postDish(dish: dishes) {
    return this.http.post(this.baseurl, dish);
  }

  getDish() {
    return this.http.get(this.baseurl);
  }
}
