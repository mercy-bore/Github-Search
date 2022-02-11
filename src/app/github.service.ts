import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: any;


  getUsers(){
    return this.user

  }
  constructor(private http:HttpClient) {}
     url = "http://api.github.users" 
    getData(){
      return this.http.get(this.url)
    }
   
}
// function getData() {
//   throw new Error('Function not implemented.');
// }

