import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

users:User[] 
user!:User;

getUsers(){
  
}


  constructor(githubService:GithubService,private http:HttpClient) {
    this.users = githubService.getUsers();
   }

  ngOnInit(): void {
    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.user = new User(data.author, data.quote)
    },err=>{
      this.user = new User("Winston Churchill","Never never give up!")
      console.log("An error occurred")
  })
  }
  }


