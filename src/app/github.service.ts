import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment } from '../environments/environment';
import {User} from './user-class/user';
import {Repo} from './repo-class/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user!: User;
  repo!: any

 
  constructor(private http:HttpClient) {
    this.user = new User("","","","",0,0,0,"","");
    this.repo = new Repo(0,"");
    console.log("service is ready");
  }


  profileRequest(searchItem: string){
    interface ApiResponse{
       avatar_url:string,
       name:string,
       bio:string,
       login:string,
       users:number,
       following:number,
       followers:number, 
       html_url:string,
       public_repos:string,
    }
    
    let headers = new HttpHeaders({
      authorization: 'token' + environment.api_key,
    })
    let options = { headers: headers }
    let completeUrl = environment.apiUrl + searchItem;

    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(completeUrl,options).toPromise().then(response=>{
        this.user.avatar_url = response!.avatar_url;
        this.user.name = response!.name
        this.user.bio = response!.bio
        this.user.login = response!.login
        this.user.users = response!.users
        this.user.following = response!.following
        this.user.followers = response!.followers
        this.user.html_url = response!.html_url
        this.user.public_repos = response!.public_repos

        resolve()

      },
      error=>{
        console.log("error")
        reject(error)

        reject(error)
      })
    })
    return promise
  }
  repoRequest(searchItem: string){
    interface ApiResponseI{
      name:string;
      id:number;
    }
    let headers = new HttpHeaders({
      authorization: 'token' + environment.api_key,
    })
    let options = { headers: headers }
    let completeUrl = environment.apiUrl + searchItem + '/repos';
    
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponseI>(completeUrl,options).toPromise().then(response=>{
        this.repo = response!
        // let url = environment.apiUrl  + searchItem + '/repos'+ '?api_Key=' + environment.apiKey;
        // let promise = new Promise((resolve, reject) => {
        //   this.http.get<ApiResponseII>(url).toPromise().then(response => {
        //     this.userRepos=response!;
        resolve(response)
      },
      error=>{
       
      console.log("error")
        reject(error)
      })
    })
    return promise
  }
}
