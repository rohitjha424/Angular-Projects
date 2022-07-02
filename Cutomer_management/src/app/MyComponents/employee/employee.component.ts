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
  newId!:number;
  name!:String
  age!:number
  salary!:number
  gender!:String
  hobbies!:String
address!:String
  myForm!: FormGroup
  row:any
   constructor() { 
     this.employees=[
       {
        newId:1,
         name:"Aditya",
         salary:26000,
         age:26,
         gender:"male",
         hobbies:'Cricket',
         address:'BTM LAYOUT, BANGALORE'
         
       }
     ]
     this.myForm = new FormGroup({
      newId:new FormControl(),
      name: new FormControl(),
      salary: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      hobbies:new FormControl(),
      address:new FormControl()

      
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
      newId:this.newId,
      name:this.name,
      salary:this.salary,
      age:this.age,
      gender:this.gender,
      hobbies:this.hobbies,
      address:this.address


    }
    console.log(employee);
    this.employees.push(employee);
  }

  onEdit(row: any)
  {

    this.myForm.controls['newId'].setValue(row.newId);
    this.myForm.controls['name'].setValue(row.name);
    this.myForm.controls['salary'].setValue(row.salary);
    this.myForm.controls['age'].setValue(row.age);
    this.myForm.controls['gender'].setValue(row.gender);
    this.myForm.controls['hobbies'].setValue(row.hobbies);
    this.myForm.controls['address'].setValue(row.address);
    
  }
 
  updateEmployee(){
    const employee={
      newId:this.newId,
      name:this.name,
      salary:this.salary,
      age:this.age,
      gender:this.gender,
      hobbies:this.hobbies,
      address:this.address

    }
    var objFound_bool = false;
    for (var i = 0; i < this.employees.length; i++) {
      if(employee.name === this.employees[i].name){
        objFound_bool = true;
        this.employees[i].newId =employee.newId ;
        this.employees[i].name =employee.name ;
        this.employees[i].salary =employee.salary ;
        this.employees[i].age =employee.age ;
        this.employees[i].gender =employee.gender ;
        this.employees[i].hobbies =employee.hobbies ;
        this.employees[i].address =employee.address ;
      }
    }
    if(!objFound_bool){
      this.employees.push(employee)
    }
  }

}
