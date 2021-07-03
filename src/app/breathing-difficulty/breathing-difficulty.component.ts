import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breathing-difficulty',
  templateUrl: './breathing-difficulty.component.html',
  styleUrls: ['./breathing-difficulty.component.css']
})
export class BreathingDifficultyComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  predict(value:number) {
    sessionStorage.setItem('breathing-difficulty',value.toString());
    this.router.navigate(['chest-pain']);
  }

}
