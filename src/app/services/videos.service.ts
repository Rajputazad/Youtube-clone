import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http:HttpClient  ) { }
  id:any;
  url="http://localhost:5000/"

  getVedios(){
    return this.http.get(this.url+"Users")
  }

Id(id:any){
  this.id=id
  console.log(this.id);
}

play(id:any){
  return this.http.get(this.url+"SendVideo/"+id)
}

}
