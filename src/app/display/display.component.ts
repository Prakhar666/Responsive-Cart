import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  

  ngOnInit() {
  }

}

export class Country {
  name: string;
  capital: string;
  area: number;
  population: number;
  currency: string;
  gdp: number;
}