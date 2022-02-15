import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import {Repo} from '../repo-class/repo';
import{User} from '../user-class/user';
import {Search} from '../search';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
repoArray!: Repo[];
userQuery!: Search;
user!: User;

  constructor( private searchService:SearchService) {
  }
  searchUser(query: any){
    this.userQuery = query
    this.searchService.searchUser(this.userQuery)
    this.user = this.searchService.user 
    this.repoArray = this.searchService.repoArray
    this.repoArray.splice(0,this.repoArray.length)

 }



  ngOnInit(): void {
    
  }

}
