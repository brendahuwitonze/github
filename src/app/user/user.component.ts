import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GitinfoRequestService } from '../gitinfo-http/gitinfo-request.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 user:User;
 
  constructor(private userService:GitinfoRequestService ) { }
  usersearch(textsearch){
    this.userService.userRequest(textsearch).then(
      ()=>{
        this.user=this.userService.user;

      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
    this.userService.userRequest("brendahuwitonze")
    this.user = this.userService.user
  }
}