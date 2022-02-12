import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';
import {User} from './user-class/user';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user!:  User
  
  getUsers(){
    return this.user
  }
  constructor(private http:HttpClient) {
    this.user = new User("","");
    console.log("service is ready");
  }
  profileRequest(){
    interface ApiResponse{
      name:string;
      bio:string;
    }
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.api_key).toPromise().then(response=>{
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
  // getProfileInfo(){
  //   return this.http.get("https://api.github.com/users/" + this.username +"?api_key=" + this.api_key);
  // }
}
