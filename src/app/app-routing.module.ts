import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreathingDifficultyComponent } from './breathing-difficulty/breathing-difficulty.component';
import { ChestPainComponent } from './chest-pain/chest-pain.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { PredictComponent } from './predict/predict.component';
import { SoreThroatComponent } from './sore-throat/sore-throat.component';
import { SymptomsCoughComponent } from './symptoms-cough/symptoms-cough.component';
import { SymptomsFeverComponent } from './symptoms-fever/symptoms-fever.component';
import { SymptomsSmellTasteComponent } from './symptoms-smell-taste/symptoms-smell-taste.component';

const routes: Routes = [
  {
    path:'fever',component:SymptomsFeverComponent
  },
  {
    path:'cough',component:SymptomsCoughComponent
  },
  {
    path:'smell-taste',component:SymptomsSmellTasteComponent
  },
  {
    path:'breathing-difficulty',component:BreathingDifficultyComponent
  },
  {
    path:'chest-pain',component:ChestPainComponent
  },
  {
    path:'sore-throat',component:SoreThroatComponent
  },
  {
    path:'predict',component:PredictComponent
  },
  {
    path:'hospitals',component:HospitalsComponent
  },
  {
    path:'doctors',component:DoctorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
