import { Injectable } from '@angular/core';
import { Repo } from './repo-class/repo';
import {User} from './user-class/user';
import axios from 'axios';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  user: User;
  repo: Repo;
  repoArray: Repo[] = [];
  constructor() {
    this.user = new User("","","","",0,0,0,"","");
    this.repo = new Repo("","","","");
  }
  async searchUser(searchTerm:any){
    try{ 
     
     const userResponse = await axios.get(environment.apiUrl + searchTerm.searchQuery,{headers:{"Authorization":environment.api_key}})
     const userRepoResponse = await axios.get(`https://api.github.com/users/${searchTerm.searchQuery}/repos` )
     console.log(userResponse.data)
     console.log(userRepoResponse.data)
     const userDetails = userResponse.data
     const userRepoArray = userRepoResponse.data

     for ( const item of userRepoArray ) {
        this.repoArray.push(new Repo( item.name,item.description, item.language,item.html_url))
      };
      console.log(this.repoArray)
  
  } catch(e){alert(e)}
  }
  
}
