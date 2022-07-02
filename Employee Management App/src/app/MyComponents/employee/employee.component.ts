import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[];
  
  name!:String
  age!:number
  salary!:number
  gender!:String
  myForm!: FormGroup
  row:any
   constructor() { 
     this.employees=[
       {
         name:"Pragya",
         salary:26000,
         age:25,
         gender:"f"
       }
     ]
     this.myForm = new FormGroup({
      name: new FormControl(),
      salary: new FormControl(),
      age: new FormControl(),
      gender: new FormControl()
      
  });
    
   }
 

  ngOnInit(): void {
  }
  onClickDelete(employee: Employee)
  {
    console.log("Delete button triggered");
    const index=this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }
  addEmployee()
  {
    const employee={
      
      name:this.name,
      salary:this.salary,
      age:this.age,
      gender:this.gender

    }
    console.log(employee);
    this.employees.push(employee);
  }

  onEdit(row: any)
  {
    
    this.myForm.controls['name'].setValue(row.name);
    this.myForm.controls['salary'].setValue(row.salary);
    this.myForm.controls['age'].setValue(row.age);
    this.myForm.controls['gender'].setValue(row.gender);
    
  }
 
  updateEmployee(){
    const employee={
      
      name:this.name,
      salary:this.salary,
      age:this.age,
      gender:this.gender

    }
    var objFound_bool = false;
    for (var i = 0; i < this.employees.length; i++) {
      if(employee.name === this.employees[i].name){
        objFound_bool = true;
        this.employees[i].name =employee.name ;
        this.employees[i].salary =employee.salary ;
        this.employees[i].age =employee.age ;
        this.employees[i].gender =employee.gender ;
      }
    }
    if(!objFound_bool){
      this.employees.push(employee)
    }
  }

}
