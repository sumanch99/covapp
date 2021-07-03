import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Symptoms } from '../symptoms';

@Component({
  selector: 'app-symptoms-cough',
  templateUrl: './symptoms-cough.component.html',
  styleUrls: ['./symptoms-cough.component.css']
})
export class SymptomsCoughComponent implements OnInit {
  
  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  predict(value:number) {
    sessionStorage.setItem('cough',value.toString());
    this.router.navigate(['smell-taste']);
  }
}
