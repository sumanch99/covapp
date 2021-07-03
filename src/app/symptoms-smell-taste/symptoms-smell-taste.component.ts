import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptoms-smell-taste',
  templateUrl: './symptoms-smell-taste.component.html',
  styleUrls: ['./symptoms-smell-taste.component.css']
})
export class SymptomsSmellTasteComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  predict(value:number) {
    sessionStorage.setItem('smell-taste',value.toString());
    this.router.navigate(['breathing-difficulty']);
  }

}
