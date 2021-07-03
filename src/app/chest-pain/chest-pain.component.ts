import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chest-pain',
  templateUrl: './chest-pain.component.html',
  styleUrls: ['./chest-pain.component.css']
})
export class ChestPainComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  predict(value:number) {
    sessionStorage.setItem('chest-pain',value.toString());
    this.router.navigate(['sore-throat']);
  }

}
