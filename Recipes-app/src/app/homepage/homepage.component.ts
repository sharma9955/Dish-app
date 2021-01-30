import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishesServicesService } from '../shared/dishes-services.service';
import { dishes } from '../shared/dishes.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private dishget: DishesServicesService, private rt: Router) {}
  dishess: any;
  ngOnInit(): void {
    this.get();
  }
  get() {
    this.dishget.getDish().subscribe((res) => {
      this.dishget.dishes = res as dishes[];
      this.dishess = this.dishget.dishes;
      console.log(this.dishget.dishes);
    });
  }
  adddish() {
    this.rt.navigateByUrl('/adddishes');
  }
}
