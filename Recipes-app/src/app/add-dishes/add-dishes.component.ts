import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { DishesServicesService } from '../shared/dishes-services.service';

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css'],
  providers: [DishesServicesService],
})
export class AddDishesComponent implements OnInit {
  public addRecepie: FormGroup;
  invalidUsername = ['rahul', 'sharma'];

  constructor(
    private rt: Router,
    private fb: FormBuilder,
    private dishservice: DishesServicesService
  ) {}

  ngOnInit(): void {
    this.addRecepie = this.fb.group({
      dishname: ['', [Validators.required]],
      ingredientsList: ['', [Validators.required]],
      quantity: [''],
      unit: [''],
      stepsToCook: [''],
      url: [''],
    });
  }

  onSubmit() {
    try {
      this.addRecepie.value;
      console.log(this.addRecepie.value);
      this.dishservice.postDish(this.addRecepie.value).subscribe((res) => {
        console.log('saved');
        this.addRecepie.reset();
        this.rt.navigateByUrl('');
      });
    } catch (error) {
      alert('Something Went Wrong');
    }
  }
  viewdishes() {
    this.rt.navigateByUrl('');
  }
}
