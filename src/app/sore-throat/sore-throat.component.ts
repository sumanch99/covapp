import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sore-throat',
  templateUrl: './sore-throat.component.html',
  styleUrls: ['./sore-throat.component.css']
})
export class SoreThroatComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  predict(value:number) {
    sessionStorage.setItem('sore-throat',value.toString());
    this.router.navigate(['predict']);
  }

}
