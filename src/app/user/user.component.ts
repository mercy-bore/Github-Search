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
  //   interface ApiResponse{
  //     author:string;
  //     quote:string;
  //   }

  //   this.http.get<ApiResponse>('https://api.github.com/users/macc254?access_token=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').subscribe(data=>{
  //     // Succesful API request
  //     this.user = new User(data.author, data.quote)
  //   },err=>{
  //     this.user = new User("Hello","We will be back soon!")
  //     console.log("An error occurred")
  // })

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
  
  


