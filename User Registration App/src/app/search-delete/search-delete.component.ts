import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
users:any;
email:string;
  constructor(private service:UserRegistrationService) { }

  public delteUser(id:number){
    let response= this.service.deleteUser(id);
    response.subscribe((data)=>this.users=data);
   
   }

public findUserByEmailId(){
 let response= this.service.getUserbyEmail(this.email);
 response.subscribe((data)=>this.users=data);

}

  ngOnInit(): void {
    let response = this.service.getUsers();
    response.subscribe((data)=>this.users=data);
  }


}
