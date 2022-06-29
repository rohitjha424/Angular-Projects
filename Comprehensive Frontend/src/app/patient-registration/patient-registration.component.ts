import { Component, OnInit } from '@angular/core';
import { DoctorRegistrationService } from '../doctor-registration.service';
import { Patient } from '../patient';
import { PatientRegistrationService } from '../patient-registration.service';
@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  patient:Patient = new Patient();
 
  message:any;
  doctors:any;
  doctorinfo:any;


  constructor(private patService:PatientRegistrationService,private service:DoctorRegistrationService) { }

  ngOnInit(): void {

    let response = this.service.getAllDoctors();
    response.subscribe((data)=>this.doctors=data);
  }

  public registerPatNow(){
    let response = this.patService.doPatRegistration(this.patient);
    response.subscribe((data)=>this.message=data);

  }
  selectName(pid :number){
   
    let response= this.service.getDoctorbyId(pid);
    response.subscribe((data)=>this.doctorinfo=data);


  
    
    console.log("id--->",pid);
    console.log("doctors--->",this.doctorinfo.docName);
    // this.router.navigate(['patient-details',pid]);
   }

}
