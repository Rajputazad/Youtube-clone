import { Component } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private videoapi: VideosService,private router:Router) { }
  ngOnInit() {
    
   this.Userdata()
// console.log(this.data);

  }
  data: any = []
  Userdata() {
    
    this.videoapi.getVedios().subscribe((res: any) => {
      if (res.success == true) {
        this.data = res.data
        // console.log(this.data);
        
      }else{
      this.router.navigate(["main/fgefy"])
      }
    })
  }

 async play(id:any){
  await this.videoapi.Id(id)
this.router.navigateByUrl("main/watch?id="+id)
}

  show = false
  click() {
    this.show = true
    setTimeout(() => {
      this.show = false
    }, 1000);


  }


}
