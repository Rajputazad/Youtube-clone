import { Component } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {
  constructor(private videoapi: VideosService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    // this.route.params.subscribe((params: any) => {
    //   const prodId = params['id'];
    // })
    var id: any = this.route.snapshot.queryParams;
    this.id = id.id
    // console.log(id.id);
this.All()
    this.Userdata()
  }
  id: any
  data: any = []
  VideoUrl: any;
  ChannelName: any
  
  video = false
  Views: any
  Userdata() {
    this.videoapi.play(this.id).subscribe((res: any) => {
      if (res.success == true) {
        this.data = res.data
        this.VideoUrl = this.data.VideoUrl
        this.ChannelName = this.data.ChannelName
        this.video = true
      } else {
        this.router.navigate(["main/Video_unavailable"])
      }
    })
  }
alldata:any=[]

All(){
  this.videoapi.getVedios().subscribe((res: any) => {
    if (res.success == true) {
      this.alldata = res.data
      // console.log(this.data);
      
    }else{
    this.router.navigate(["main/fgefy"])
    }
  })
}

async play(id:any){
  await this.videoapi.Id(id)

  this.router.navigate(["main/home"])
  setTimeout(() => {
	this.router.navigateByUrl("main/watch?id="+id)
}, 1);
}
}
