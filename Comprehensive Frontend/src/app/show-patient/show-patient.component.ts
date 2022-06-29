import { Component, OnInit } from '@angular/core';
import { PatientRegistrationService } from '../patient-registration.service';
//import { Patient } from '../patient';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  patients:any;
  message:any;
  patientId:any;
  tablehide:boolean=false;


  constructor(private service:PatientRegistrationService) { }

  public deletePatient(patientId:number){
    let response= this.service.deleteAPatient(patientId);
    response.subscribe((data)=>this.patients=data);
    
   
   }

   public getPatientDetails(patientId:number){
    let response= this.service.getPatientById(patientId);
    response.subscribe((data)=>this.patients=data);
    

   // this.patients=data.patients;

    console.log("data--",this.patients)
   
   }

  ngOnInit(): void {

    // let response = this.service.getAllPatient();
    // response.subscribe((data)=>this.patients=data);
  }

}
