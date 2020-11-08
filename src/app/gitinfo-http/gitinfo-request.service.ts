import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Repository } from '../repository';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitinfoRequestService {
 user:User;
 repository:Repository
  constructor(private http:HttpClient) { 
    this.user=new User("","","",0,0,0,)
    this.repository=new Repository(0,"","","")
  }
  userRequest(textsearch:string){
    interface ApiResponse{
      avatar_url:string;
      name:string;
      login:string;
      public_repos:number
      followers:number;
      following:number;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+textsearch+'?access_token='+environment.apiKey).toPromise().then(response=>{
        this.user.avatar_url = response.avatar_url
        this.user.name =response.name
        this.user.login=response.login
        this.user. public_repos = response. public_repos
        this.user.followers=response.followers
        this.user.following=response.following

        resolve()
      },
      error=>{
        
      this.user.avatar_url ="there was an error"
       this.user.followers=34
      reject(error);
      
      })
    })
    return promise
  }
  repoRequest(textsearch:string){
    interface ApiResponse{
      id:number;
      name:string;
      html_url: string;
      description:string;
  }
  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>('https://api.github.com/users/'+textsearch+'/repos_url"?access_token='+environment.apiKey).toPromise().then(response=>{
      this.repository.id = response.id
      this.repository.name = response. name
      this.repository.html_url=response.html_url
      this.repository.description=response.description

      resolve()
    },
    error=>{
     this.repository.description="error occured"
     this.repository.name="Akan"
  
      reject(error);
      
    })
  })
  return promise
}

}
