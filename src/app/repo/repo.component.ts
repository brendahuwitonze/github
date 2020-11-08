import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { GitinfoRequestService } from '../gitinfo-http/gitinfo-request.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repository: Repository;
  
  constructor( private repositoryService:GitinfoRequestService) { }
  reposearch(textsearch){
    this. repositoryService.repoRequest(textsearch).then(
      ()=>{
        this.repository=this.repositoryService.repository;

      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
    this.repositoryService.repoRequest("brendahuwitonze")
    this.repository = this.repositoryService.repository
  }
}

