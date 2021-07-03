import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hospital } from './models/hospital.model';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {
  hospitals!: Hospital[];
  token="";
  myToken='';
  constructor(private http:HttpClient) { 
    this.http.get<any>('https://api.rootnet.in/covid19-in/hospitals/medical-colleges').subscribe((res)=>{
      this.hospitals = res.data.medicalColleges;  
      console.log(this.hospitals);
      })
  }

  ngOnInit(): void {
  }
  findHospital(Input: any){
    console.log("here");
    console.log(Input.value);
    this.myToken = Input.value;
  }
}
