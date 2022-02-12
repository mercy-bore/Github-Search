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

  ngOnInit(): void {
    this.githubService.repoRequest(); 
    this.repo = this.githubService.repo
  }

}
