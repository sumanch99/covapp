import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymptomsFeverComponent } from './symptoms-fever/symptoms-fever.component';
import { SymptomsCoughComponent } from './symptoms-cough/symptoms-cough.component';
import { SymptomsSmellTasteComponent } from './symptoms-smell-taste/symptoms-smell-taste.component';
import { BreathingDifficultyComponent } from './breathing-difficulty/breathing-difficulty.component';
import { SoreThroatComponent } from './sore-throat/sore-throat.component';
import { ChestPainComponent } from './chest-pain/chest-pain.component';
import { PredictComponent } from './predict/predict.component';
import { Symptoms } from './symptoms';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { FormsModule } from '@angular/forms';
import { DoctorsComponent } from './doctors/doctors.component';
import { PredictionHomepageComponent } from './prediction-homepage/prediction-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomsFeverComponent,
    SymptomsCoughComponent,
    SymptomsSmellTasteComponent,
    BreathingDifficultyComponent,
    SoreThroatComponent,
    ChestPainComponent,
    PredictComponent,
    HospitalsComponent,
    DoctorsComponent,
    PredictionHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Symptoms
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
