import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Symptoms } from '../symptoms';

@Component({
  selector: 'app-symptoms-fever',
  templateUrl: './symptoms-fever.component.html',
  styleUrls: ['./symptoms-fever.component.css']
})
export class SymptomsFeverComponent implements OnInit {
  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }

  predict(value:number) {
    sessionStorage.setItem('fever',value.toString());
    this.router.navigate(['cough']);
  }

}
