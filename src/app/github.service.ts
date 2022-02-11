import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: any;


  getUsers(){
    return this.user

  }
  constructor() { }
}
