import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
  ...
  <ngx-loading-bar></ngx-loading-bar>
`,

})
export class AppComponent {
  title = 'youtube_clone';
  // constructor(private loadingBar: LoadingBarService) {
  //   // this.startLoading()
  // }

  // startLoading() {
  //   this.loadingBar.start();
  // }

  // stopLoading() {
  //   this.loadingBar.complete();
  // }
}
