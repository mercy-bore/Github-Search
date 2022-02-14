import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClient } from '@angular/common/http';
import {User} from '../user-class/user';
import {Repo} from '../repo-class/repo'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

user!:User
repo!:any
// githubservice:any;
 
  constructor( private githubService:GithubService,private http:HttpClient) {
   }


searchProfile(searchItem: string){
  this.githubService.profileRequest(searchItem).then((success)=> {
    this.user = this.githubService.user
    console.log( this.user)
  }),
  this.githubService.repoRequest(searchItem).then((success)=> {
    this.repo = this.githubService.repo
    console.log( this.repo)

  })
}
  ngOnInit(): void {
  this.searchProfile("macc254")
  
  }


}
  
  



