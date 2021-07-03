import { Component, OnInit } from '@angular/core';
import { Symptoms } from '../symptoms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {

  percentage:number = 95;
  myColor="";
  constructor(private symptoms:Symptoms) { 
    symptoms = new Symptoms;
  }

  ngOnInit(): void {
    console.log(sessionStorage);
    const fever = parseInt(sessionStorage['fever']);
    this.symptoms.fever = fever;
    const cough = parseInt(sessionStorage['cough']);
    this.symptoms.cough = cough;
    const smellTaste = parseInt(sessionStorage['smell-taste']);
    this.symptoms.smellTaste = smellTaste;
    const breathingDifficulty = parseInt(sessionStorage['breathing-difficulty']);
    this.symptoms.breathingDifficulty = breathingDifficulty;
    const chestPain = parseInt(sessionStorage['chest-pain']);
    this.symptoms.chestPain = chestPain;
    const soreThroat = parseInt(sessionStorage['sore-throat']);
    this.symptoms.soreThroat = soreThroat;
    console.log(this.symptoms);

    let term = -1.32+(0.2*(this.symptoms.soreThroat/100))+(0.5*(this.symptoms.cough/100))+(1.75*(this.symptoms.fever/100))+(0.35*(this.symptoms.chestPain/100))+(0.6*(this.symptoms.breathingDifficulty)/100)+(1.0*(this.symptoms.smellTaste/100));

    this.percentage = 100 * Math.exp(term)/(1+Math.exp(term));
    console.log("Percentage: "+this.percentage);
    if(this.percentage>=85){
      Swal.fire('Danger!', 'You have high probability of getting affected by COVID!', 'error');
      this.myColor='red';
    }
    else if(this.percentage>=60){
      Swal.fire('Oops!', 'You have the symptoms of getting affected by Sars-Cov-2', 'warning');
      this.myColor='#F1d50e';

    }
    else if(this.percentage<60){
      Swal.fire('Congratulations', 'As of now, you are safe from Sars-Cov-2', 'success');
      this.myColor='green';
    }
  }



}
