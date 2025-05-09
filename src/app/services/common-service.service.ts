import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
