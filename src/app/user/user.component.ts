import { Component, OnInit,Input } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClient } from '@angular/common/http';
import {User} from '../user-class/user';
import {Search} from '../search';
import { SearchService } from '../search.service';
import { Repo } from '../repo-class/repo';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users!: String[];


user!:User
userRepos!:any;
userArray:any;
userquery!: Search
//user search




// username:string ='macc254'
// githubservice:any;
 
  constructor( private githubService:GithubService,private http:HttpClient) {
   }


searchUser(query: Search){
   this.userquery = query
   

}

  ngOnInit(): void {

this.githubService.searchItem()
 this.user = this.githubService.user
 this.userArray = this.githubService.repoArray
  }


}
  
  




