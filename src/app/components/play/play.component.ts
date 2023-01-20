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

    this.Userdata()
  }
  id: any
  data: any = []
  VideoUrl: any;
  likes: any
  dislike: any
  VideoTitle: any
  Subscribers: any
  ChannelName: any
  ChannelImageUrl: any
  video = false
  Views: any
  Userdata() {
    this.videoapi.play(this.id).subscribe((res: any) => {
      if (res.success == true) {
        this.data = res.data
        this.VideoUrl = this.data.VideoUrl
        this.ChannelName = this.data.ChannelName
        this.video = true
        console.log(this.VideoUrl);
      } else {
        alert(res.message)
      }
    })
  }



}
