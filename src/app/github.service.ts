import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment } from '../environments/environment';
import {User} from './user-class/user';
import {Repo} from './repo-class/repo';
import { Observable } from 'rxjs';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user!: User;
  repo!: Repo;
 
  
  repoArray: Repo[]=[];

 
  constructor() {
    this.user = new User("","","","",0,0,0,"","");
    this.repo = new Repo("","","","");
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
    }}
async searchItem(){
  try{ 
const response = await axios.get(environment.apiUrl + "macc254",{headers:{"Authorization":environment.api_key}}  );
const repoResponse = await axios.get( "https://api.github.com/users/macc254/repos");
console.log(repoResponse.data)
console.log(response.data)
const myResponse = response.data
const repoResponseArray= repoResponse.data
this.user.avatar_url = myResponse.avatar_url
this.user.login = myResponse.login
this.user.bio= myResponse.bio
this.user.followers = myResponse.followers
this.user.following = myResponse.following
this.user.html_url = myResponse.html_url


//  repos
for (const item of repoResponseArray) {
  this.repoArray.push(new Repo(item.name, item.description, item.language,item.html_url))
}
console.log(this.repoArray)

} catch(e){alert(e);}
}
  }
