import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import dataSample from './menu.json';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getAll(): Array<any> {
    return dataSample;  
  }
  
}
