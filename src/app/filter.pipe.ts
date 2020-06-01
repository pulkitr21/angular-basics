import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(value: any, searchN:string): any {

    if(searchN===""){
      return value;
    }
    
    const playersArray:any[]=[];

    for(let i=0;i<value.length;i++){
        let teamName:string=value[i].team;

        if(teamName.startsWith(searchN)){
          playersArray.push(value[i]);
          console.log(value[i]);
          console.log(searchN);
        }
        
    }
    return playersArray; 
  }
 

}
