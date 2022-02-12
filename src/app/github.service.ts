import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';
import {User} from './user-class/user';
import {Repo} from './repo-class/repo';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user!: User;
  repo!:Repo;

 
  constructor(private http:HttpClient) {
    this.user = new User("","");
    this.repo = new Repo(0,"");
    console.log("service is ready");
  }


  profileRequest(){
    interface ApiResponse{
      name:string;
      bio:string;
    }
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.name = response!.name
        this.user.bio = response!.bio

        resolve()
      },
      error=>{
        this.user.name = "Never, never, never give up"
        this.user.bio = "Winston Churchill"

        reject(error)
      })
    })
    return promise
  }
  repoRequest(){
    interface ApiResponse{
      name:string;
      bio:string;
    }
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.name = response!.name
        this.user.bio = response!.bio

        resolve()
      },
      error=>{
        this.user.name = "Never, never, never give up"
        this.user.bio = "Winston Churchill"

        reject(error)
      })
    })
    return promise
  }
}
