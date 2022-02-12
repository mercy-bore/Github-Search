import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClient } from '@angular/common/http';
import {User} from '../user-class/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

user!:User
// githubservice:any;
 
  constructor( private githubService:GithubService,private http:HttpClient) {
   }

  ngOnInit(): void {
  
  this.githubService.profileRequest(); 
  this.user = this.githubService.user
  }

  // getUsers(){
  //   this.githubservice.getData().subscribe((data: any)=>{
  //     // Succesful API request
  //     console.log(data) ;   
  //     this.user=data;
  // })
}
  
  


