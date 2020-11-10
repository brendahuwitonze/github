import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'created'
})
export class CreatedPipe implements PipeTransform {

  transform(value: any): any{
    let currentYear: any = new Date().getFullYear(); //2020
    let githubCreatedYear:any = new Date(value).getFullYear();
    let githubYear = currentYear - githubCreatedYear;

    return githubYear;
  }

}
