import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClient } from '@angular/common/http';
import {Repo} from '../repo-class/repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
repo!:Repo
  constructor( private githubService:GithubService,private http:HttpClient) {
  }
 
  // searchProfile(searchItem: string){
  //   this.githubService.repoRequest(searchItem).then((success)=> {
  //     this.repo = this.githubService.repo
  //     console.log( this.repo)
  
  //   })
  


  ngOnInit(): void {

  }

}
